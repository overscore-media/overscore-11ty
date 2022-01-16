const fs = require("fs");
const htmlmin = require("html-minifier");
const pluginSEO = require("eleventy-plugin-seo");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const embedYouTube = require("eleventy-plugin-youtube-embed");

const yaml = require('js-yaml')

const markdownIt = require('markdown-it')
const markdownItImageFigures = require('markdown-it-image-figures')

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  if (process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addTransform("htmlmin", htmlminTransform);
  } else {
    eleventyConfig.setBrowserSyncConfig({ callbacks: { ready: browserSyncReady }});
  }

  // Allow YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // Use modified markdown-it config for markdown rendering
  eleventyConfig.setLibrary('md', markdownIt({
    // markdown-it options go here
    html: true
  }).use(markdownItImageFigures, {
    figcaption: true,
    lazy: true,
    classes: 'h-postimg flex justify-center items-center',
    async: true
  }));

  // Plugin for embedding youtube videos in markdown
  eleventyConfig.addPlugin(embedYouTube);

  // Passthrough
  eleventyConfig.addPassthroughCopy({ "src/static": "." });

  // Watch targets
  eleventyConfig.addWatchTarget("./src/styles/");

  // SEO stuff
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));

  // For rendering inline markdown
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Service examples collection
  eleventyConfig.addCollection("service_examples", function(collectionApi) {
    return collectionApi.getAll().filter((item) => item.inputPath.startsWith('./src/services/examples/'));
  });

  // Collaborator profiles collection
  eleventyConfig.addCollection("collaborators", function(collectionApi) {
    return collectionApi.getAll().filter((item) => item.inputPath.startsWith('./src/collaborators/'));
  });

  // Date formatting filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  var pathPrefix = "";
  if (process.env.GITHUB_REPOSITORY) {
    pathPrefix = process.env.GITHUB_REPOSITORY.split('/')[1];
  }

  return {
    dir: {
      input: "src"
    },
    pathPrefix
  }
};

function browserSyncReady(err, bs) {
  bs.addMiddleware("*", (req, res) => {
    const content_404 = fs.readFileSync('_site/404.html');
    // Provides the 404 content without redirect.
    res.write(content_404);
    // Add 404 http status code in request header.
    // res.writeHead(404, { "Content-Type": "text/html" });
    res.writeHead(404);
    res.end();
  });
}

function htmlminTransform(content, outputPath) {
  if( outputPath.endsWith(".html") ) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    });
    return minified;
  }
  return content;
}
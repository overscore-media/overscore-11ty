---
layout: page
title: Sequence 21 Studios 
banner: /images/projects/sequence21/s21-banner.png
link: https://www.sequence21.com/
description: A hand-crafted, feature-rich web application for an ambitious up-and-coming production company. This site serves both as a marketing funnel for the business, and as a platform for creators to show off their work portfolios.
date: 2022-01-16
collaborators: 
- Matthew Piercey
- Evan Campbell-Weiner
- Joshua Rose
- Myles Lee
tech:
- Livewire
- Laravel
- Tailwind.CSS
- Alpine.js
- PHP
- Stripe
---

As a new production company, Sequence21 Studios has massive plans in mind, that require the surgical precision of our talented developers. Presenting this business and its respective works with the visual appeal befitting the film industry wasn't the only priority of this project; we were also tasked with developing a small scale CMS (content management system) named The Scene, where subscribed members can add/edit their own projects into a portfolio.

# Features

Here's a list of goals for this project:

- Landing page, complete with sections that link to other important pages. These sections are condensed versions or sneak-peeks into the kind of content on its respective page. The landing page should open with a flashy video, crucial for a lasting and compelling first impression.
- Services page, that details a list of all services the company provides; clicking on an individual service allows you to view examples 
- An Our Work page, that displays all projects created by the "In House" team - which are to be distinguished separately from those of members of The Scene.
- The Scene homepage, which displays a gallery of projects that can be searched or filtered by category. A list of members is also displayed and searchable.
- An About Us page, that gives more information about the company - including a video and headshots of the executive team.
- A Contact form, located in the footer
- Register and login for a member or admin account; users can create a profile and subscribe to The Scene. An admin account will have additional features to manage users and projects.  

Since our client is a production company, they've already had substantial work done in branding and content creation. Therefore, we were able to partner with their own in-house designer William, who provided us with beautiful mockups for the majority of the pages we needed. In addition, we were given images and videos to add in key places, to bring the design to life. Rather than explaining it to you, we shall let you feast your eyes on it..

## The Landing page

![screenshot of fullscreen video on top of homepage](/images/projects/sequence21/s21-land-vid.png "Video reel hero")

![company motto and logos of collaborator organizations](/images/projects/sequence21/s21-land-partners.png "Synopsis and list of partner organizations")

![selectable projects produced in-house](/images/projects/sequence21/s21-land-feat.png "Featured In House project and link to Our Work")

![banners for customizable film product, animation, and graphic design](/images/projects/sequence21/s21-land-serv.png "Base services that link to service page")

![grid of users](/images/projects/sequence21/s21-land-scene.png "List of some The Scene members and link to The Scene home page")

## Services page

![services page slider](/images/projects/sequence21/s21-services.png "Lists of various services")

## Our Work page

![grid of in-house projects](/images/projects/sequence21/s21-ourwork.png "Gallery of In House projects on Our Work page")

## About page

![introduction video above a short blurb on the about page](/images/projects/sequence21/s21-about.png "About page featuring a video")

Let's go into more detail about The Scene; like we explained before this is a custom feature that allows users to showcase their own portfolios.  This is a subscription based service, and since we want to leave room for other features such as Take One (coming soon) we separated the process of creating a user account and becoming a member.  Registered users will have the option to edit their account information and manage subscriptions.  New users will see the option to become a member of The Scene on their dashboard after registration, subscription payment processing is handled through Stripe.

![login form with forgot password and register buttons](/images/projects/sequence21/s21-login.png "Log in form")

![profile information editor](/images/projects/sequence21/s21-profile.png "Profile information that can be edited")

![dashboard](/images/projects/sequence21/s21-dash.png "User dashboard showing subscriptions (and The Scene member project info)")

![user portfolio](/images/projects/sequence21/s21-user-profile.png "User profile view")

Subscribed users now have access to their own portfolio.  Here they can add new projects that include inputs for a thumbnail, images, a video link (youtube or vimeo), categories for selecting genre, and a list of collaborators.  They can also choose to make the project private or public so that it's visibility on the site is controlled. 

![project editor](/images/projects/sequence21/s21-create1.png "Editing a project")

![grid of project images to add/delete](/images/projects/sequence21/s21-create2.png "Editing a project - Image uploader")

![textboxes, one small and one large with extra controls](/images/projects/sequence21/s21-create3.png "Editing a project - synopsis and description")

![collaborator name and role selector](/images/projects/sequence21/s21-create4.png "Editing a project - Crew")

This is what a published project looks like to visitors; it'll also be visible on The Scene's homepage.

![project image above title, author, genre, etc.](/images/projects/sequence21/s21-proj.png "Project view")

![a row of project pictures](/images/projects/sequence21/s21-proj2.png "Project view - Gallery")

![a row of project collaborators' names and pictures](/images/projects/sequence21/s21-proj3.png "Project view - Crew")

# Development

This project provided many unique challenges for our team.

On the front-end, we essentially replicated the designs given to us by the client using [Tailwind CSS](https://tailwindcss.com/) for the majority of the styling work, as well as our own CSS and some additional libraries where applicable. The Tailwind framework makes it easy to change the look of components directly on the tag without making a huge mess or scrolling to find class names constantly. For more complicated designs, such as this row of differently shaped thumbnails, we used conditional CSS classes with the help of [Alpine.js](https://alpinejs.dev/). Not going to lie, it kind of felt like magic, and we're use to this stuff 😀!

![grid of project names and pictures](/images/projects/sequence21/s21-projects-in.png "Projects on member's page")

Similar to the projects display above, there are many other custom containers for holding dynamic information. A lot of these lists are shown as carousels made using [Swiper.js](https://swiperjs.com/), such as the list of services or images for an individual project.

![another example of a row of project pictures](/images/projects/sequence21/s21-project-image.png "Project images")

Others, like the larger list of projects on The Scene home page, are shown in a grid and use pagination provided by Livewire.

![a grid of project photos, with a page selector below](/images/projects/sequence21/s21-scene-grid.png "Projects on The Scene home")

And of course, even though designs weren't made for the mobile version of the site, we had it covered, finding a way to stick to the spirit of the desktop site, with some additional niceties thrown in for visitors on the go 😉. Yes, that includes all project editors and admin dashboards - every page is as responsive as we could make it.

![transluent mobile navigation on top of a video playing](/images/projects/sequence21/s21-m-nav.jpg "Mobile navigation")

![contact form on mobile, firm and last name, email, and message](/images/projects/sequence21/s21-m-contact.jpg "Mobile contact form")

![project and member selector on mobile](/images/projects/sequence21/s21-m-project.jpg "Mobile The Scene home")

All in all, we are really pleased with how this turned out. It's the most-complicated web app we have created to date, but we were able to bring a unique flair and pragmatism to the project that resulted in a very nice-looking site that is also extremely functional for visitors, users, and administrators.
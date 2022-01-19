---
layout: page
title: Stluet Furniture
banner: /images/projects/stluet/stluet-banner.png
link: https://www.stluet.com/
description: A hand-crafted e-commerce furniture store, featuring a robust admin panel for customization of the site and its products
date: 2022-01-16
collaborators: 
- Matthew Piercey
- Evan Campbell-Weiner
- Joshua Rose
tech:
- Laravel
- Stripe
- Inertia.js
- Vue.js
- Tailwind.CSS
- PHP
---

Stluet is a fully-fledged e-commerce furniture store with plenty of neat functionality baked in. Our client is now able to easily manage the majority of the site's content live, thanks to our custom admin dashboard.

# Visitor Features

From the users' side, we present a light and minimalist design to compliment the style of products our client plans on displaying; lighting fixtures, accents, etc. From the home page, users have the freedom to search for a specific item or to discover something new. This is achieved with categories and a search input in the navigation bar, as well as a list of the store's featured products and categories below (no featured products displayed at the moment).

![homepage](/images/projects/stluet/stluet-home.png "Clean simple home page design")

Just like any other online store; users can click on a product they love, to see its details, add it to the cart, and then proceed to our custom checkout built with Stripe as our payment processor.

![product details](/images/projects/stluet/stluet-product.png "Individual product details")

![cart](/images/projects/stluet/stluet-cart.png "Shopping cart")

![payment handling](/images/projects/stluet/stluet-payment.png "Payment Processing")

# Admin Features

So what exactly can our admin dashboard do? Witness the true power of real web *developers*!

Why, it allows for the creation, updating, and deletion of products on the live site, of course! We made sure to include all the attributes our client and their customers may want to see - we're talking dimensions, price, quantity in stock, weight, description, et cetera. A product can also be "Featured" so that it gets a preferential display on the homepage. Oh, and that image uploader? Yeah, we're pretty proud of that. It allows for each product to have one header image and up to five additional images that can be shown in a slideshow. The image editor itself has the following features:

![product editor](/images/projects/stluet/stluet-edit-product.png "Creating/editing a product")
![image editor](/images/projects/stluet/stluet-edit-productimg.png "Editing images")

Upload images with Filepond.js
- Preview images
- Move images up or down in the list
- Download images
- Add description text to images
- Edit images using the TUI Image Editor

All that, and from what we've learned with Stluet, we can make one like this for any website!

Products can be neatly organized and displayed with categories. Just like individual products, whole categories can be featured on the homepage, too!

![category editor](/images/projects/stluet/stluet-edit-category.png "Editing categories")

We integrated several content editors: so news headlines, the about page, the privacy policy, and the terms of service can all be edited live from the backend.

![about page editor](/images/projects/stluet/stluet-edit-aboutpage.png "Editing about page")

![news editor](/images/projects/stluet/stluet-edit-news.png "Editing news reel")

And, upon special request, we made a whole site colours editor. From clever cachebusting techniques, to CSS custom properties, to custom Tailwind classes and Inertia.js callbacks, we pulled no punches to make this editor's user experience seamless and intuitive. If you have a custom feature in mind, we very well may be able to go OverBoard for you to make it happen 😂.

![selecting colours](/images/projects/stluet/stluet-edit-colours1.png "Colour Selector")

![colour palettes](/images/projects/stluet/stluet-edit-colours2.png "Palette Previewer")

![before and after colour editor preview](/images/projects/stluet/stluet-edit-colours3.png "Before-and-after Previewer")

Now, where were we? Oh right, this is an e-commerce site. Well, of course we had to make a order handling system using Stripe. When an order is placed with Stripe, the site owner gets an email notification, the customer gets a confirmation email with a custom-generated PDF invoice, and the admin dashboard gets populated with a new order. The site owner can then send the customer an update email directly from the backend, for things like their tracking number. But crucially, since we're using Stripe, we didn't have to store any customers' personal information on our database - it's all fetched only when required from Stripe's secure and robust API.

Responsiveness is a benchmark in professional web development these days - which is why stluet.com's navigation layout changes fluidly with narrower viewports.  When exploring the site on a mobile device, the navbar is replaced with a single collapsible menu icon that takes up very little space. We definitely had fun with this one - Tailwind.CSS made it pretty easy. Oh yeah, it's also a progressive web app (PWA), so you could, for example, add it to your homescreen from Chrome and launch it like an app - complete with a splash screen, icons, and a "You are Offline" page. Just another way we've built this site with mobile friendliness in mind at all stages.

![banner](/images/projects/stluet/stluet-mobile.png "Mobile navigation")

All in all, this project was a lot of fun, and we've barely even showcased half of the things we made for this site. It was our first real website with a backend, and it was a great test of what we got. Definitely check it out for yourself (at least the customer-facing view 😉) at stluet.com.

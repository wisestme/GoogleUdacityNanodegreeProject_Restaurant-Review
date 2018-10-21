# Title: Restaurant Review App Project

 ## Author: Nwagwu Chijioke

 ## Purpose: 
* ### Part of the requirements for completing my Nanodegree Google scholarship program at Udacity.
 * ### To display my ability to traverse and manipulate the DOM.
 * ### To display my ability to dynamically create and manipulate DOM elements
 * ### To showcase my web development skillset which includes making a website accessibility compliant, responsive and usable on all screen sizes, able to view visited sites in the offline mode.

 ## Overview
 In this project, we have a restaurant reviews website that was originally not responsive, not compliant to the accessibility standards and could not be revisited in the offline mode. I have implemented changes to the css, html and javaScript files provided to turn the site to one that is responsive and can be viewed on all screen sizes. I have also made it compliant to accessibility standards. I have also made it possible for pages visited to be accessible when the user goes offline.
 
  ## Method:
  * ### I got the Starter Code.
  * ### I hosted the project locally in order to work on it by running on my terminal 'python -m http.server 8000'.
  * ### I added map using MapBox by creating an API key token then adding it to the initMap function in the main.js file.
  * ### I added the same MapBox token to the initMap function in the restaurant_info.js file otherwise, trying to review any of the restaurant would display a blank map.
  * ### I implemented responsiveness to the site.
  * ### I used the "Audits" application in the Chrome dev tools to implement the accessibility features by following the recommendation in the audits.
  * ### I finally implemented Service Workers to make visited pages of the  site accessible after the user goes offline.

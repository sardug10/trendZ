# trendZ
In the root directory:-
  index.html:- Contains markup of the first page when the website is loaded.
  kurta.html:- Contains markup of the kurta collections page
  saree.html:- Contains markup of the saree collections page
  lehnga.html:- Contains markup of the lehnga collections page
  suit.html:- Contains markup of the suit collections page
  
  CSS:-
    <------------------ FOR MAIN PAGE------------------->
    1) 'fonts' folder and 'icon-font.css' are the resource files for icomoon icons used in the 'services' section.
        Rest of the icons used are 'font-awesome icons' which are embeded using 'bootsrap-font-awesome' cdn.
    2) 'style.css' is the CSS file for the 'index.html'. If you want to modify the CSS code, do it in 'style.scss' file and it will be lot easier
        because '.css' file is being generated automatically through '.scss' file.
        
    <------------------ FOR GALLERY PAGE------------------->
    1) In all the gallery markup files i.e, 'kurta.html' etc, I have used a 'jquery' library 'fancybox' to make the images popup on click. Therefor, to
      change the images you have to modify it's source path at 2 places.
        1) In the markup files, within the 'href' attribute in the anchor tag with class 'fancybox'. This contains the source of image which is to be shown
           when the popup is 'active' i.e, when someone clicks on image.
        2) In the 'gallery.scss' file from line 206, there is each seperate class for each image like '.img-1' and inside this in the 'background-image' property.
           Note:- These images will be shown when the page is loaded and it was done like this so as to create hover effects on it. 
           
    Also, in both the CSS files the media-queries are written using 'mixins' in scss. That makes writing media-queries alot easier.
    
   JS:-
    The 'js' folder is having 3 '.js' files.
      1) 'script.js':- This file contains code for the 'typing-effect' at the header.
                       Below that, the code for to initialise the 'flickity-carousel' for the trending section.
                       After that, the code for the collapsible 'navigation-bar'.
                       And atlast, the code for initialising the map, and it is required to get your own access token from 'mapbox.com' and then put that in the 'accessToken'
                       and after that, you can select different styles for the map, after selecting it will create a 'style-link' copy that, and put that in 'style' under the
                       'new map' options.
      2) jquery.js:- Contains the jquery code for the sticky navigation bar.
      3) fancyBox.js:- contains the jquery code for initialising the popup used in gallery.
      
   resources folder:-
    It conatins all the downloaded CSS and JS files used for various purposes like carousel, or popup etc. It must not be deleted or edited for proper working.
    

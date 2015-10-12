/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0) //offsett is 50 if navbar is present
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    //google maps
        $("#cu").on('click', function () {
            newLocation(40.007598, -105.266011, 17);
            
            
        });
        $("#highschool").on('click', function () {
            newLocation(4.442843, 101.133859, 17);
            
            
        });
        $("#kinder").on('click', function () {
            newLocation(3.909093, 100.942562, 17);
            
            
        });
        $("#midschool").on('click', function () {
            newLocation(3.921555, 100.950334, 17);
            
            
        });
        $("#prep").on('click', function () {
            newLocation(3.046642, 101.501534, 17);
            
        });

})(jQuery); // End of use strict

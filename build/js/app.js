// Custom JS Application Code

// If using JSLint for syntax debugging, include the following
/*global $, console, alert, App*/

$(function() {
    App.init();
});

var App = {

    settings: {
        name: "Killakyle.com",
        version: "1.0.0",
        ga: {
            urchin: "UA-XXXXXX-XX",
            url: "killakyle.com"
        }
    },

    listen: function() {
        // Application Listeners can be loaded here for easy configuration		
        console.log("Ready and Listening");

    },

    init: function() {
        // Kick off the listeners
        this.listen();
        // Application has been initalized
        console.log(this.settings.name + "(v" + this.settings.version + ") Started");

        $(window).scroll(headerParallax);



        function headerParallax() {
            var st = $(window).scrollTop();
            var headerScroll = $('.header-scroll');

            if (st < 900) {
                console.log('this works');
                headerScroll.css('opacity', 1 - st / 2000);
                $('.page-scroll').css('opacity', 1 - st / 250);
                headerScroll.css({
                    // '-webkit-transform': 'translateY(' + st / 20 + '%)',
                    // '-ms-transform': 'translateY(' + st / 20 + '%)',
                    transform: 'translateY(' + st / 200 + '%)'
                });
            }
        }

    }

};
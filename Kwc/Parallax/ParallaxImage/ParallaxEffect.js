var $ = require('jQuery');
var onReady = require('kwf/on-ready');

onReady.onRender('.kwcParallaxParallaxImage', function(el) {
    if (Modernizr.touch) return;

    function updateBackgroundPosition() {
        if ($(window).width() < 650) {
            el.find('.kwcAbstractImage > .parallaxImage').css({
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
                backgroundAttachment: 'scroll'
            });

        } else {

            if ( ($(window).scrollTop() + $(window).height()) > (el.offset().top-el.height()) ) {
                var scrollTop = $(window).scrollTop();
                var speed = el.data('speed');
                var yPos = -((scrollTop - el.offset().top) / (speed ||  2) - (scrollTop - el.offset().top));
                var offsetY = 0;

                if (el.data('offsetY')) {
                    offsetY = parseInt(el.data('offsetY'));
                }

                var styles = {
                    'transform' : 'translateY(' + ((yPos))  + 'px)',
                    '-webkit-transform' : 'translateY(' + ((yPos))  + 'px)',
                    '-ms-transform' : 'translateY(' + ((yPos))  + 'px)',
                    'background-position' : '50% ' + offsetY + 'px'
                };

                el.find('.kwcAbstractImage > .parallaxImage').css(styles);
            }
        }
    }

    $(window).on('scroll mousewheel', updateBackgroundPosition);

    var activeTimeout = null;

    $(window).on('resize', function() {
        if (activeTimeout) clearTimeout(activeTimeout);
        activeTimeout = setTimeout(updateBackgroundPosition, 100);
    });

    updateBackgroundPosition();
});

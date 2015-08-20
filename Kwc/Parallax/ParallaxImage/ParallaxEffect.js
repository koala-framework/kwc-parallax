var $ = require('jQuery');
var onReady = require('kwf/on-ready');

onReady.onRender('.kwcClass', function(el) {
    var speed = parseFloat(el.data('speed'));
    if (Modernizr.touch || speed === 1) return;

    var yPos = 0;
    var parent = el.parent().parent();
    var containerHeight = 0;
    var factor = 0;

    function setOuterContainerHeight() {
        containerHeight = parent.height();
        if (speed < 1) {
            el.css('height', containerHeight/speed);
        } else {
            el.css('height', containerHeight*speed);
        }
    }

    function updateBackgroundPosition() {
        if ($(window).width() < 650) {
            el.find('.parallaxImage').css({
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
                backgroundAttachment: 'scroll'
            });
        } else {
            if ( ($(window).scrollTop() + $(window).height()) > (el.offset().top-el.height()) ) {
                if (speed < 1) {
                    factor = ((parent.position().top - $(window).scrollTop() + containerHeight)/($(window).height() + containerHeight) - 1)*(-1);
                    if (factor < 0)factor = 0;
                    yPos = (-el.height()+containerHeight)*factor;
                } else {
                    factor = (parent.position().top - $(window).scrollTop() + containerHeight)/($(window).height() + containerHeight);
                    if (factor < 0)factor = 0;
                    yPos = (-el.height()+containerHeight)*factor;
                }

                var styles = {
                    'transform' : 'translateY(' + ((yPos))  + 'px)',
                    '-webkit-transform' : 'translateY(' + ((yPos))  + 'px)',
                    '-ms-transform' : 'translateY(' + ((yPos))  + 'px)'
                };
                el.find('.parallaxImage').css(styles);
            }
        }
    }

    //verwende jquery.scroll() für IE support
    $(window).scroll(updateBackgroundPosition);

    var activeTimeout = null;
    $(window).on('resize', function() {
        if (activeTimeout) clearTimeout(activeTimeout);
        activeTimeout = setTimeout(function() {
            setOuterContainerHeight();
            updateBackgroundPosition();
        }, 100);
    });

    setOuterContainerHeight();
    updateBackgroundPosition();
});

var $ = require('jQuery');
var onReady = require('kwf/on-ready');

onReady.onRender('.kwcClass', function(el) {
    var speed = parseFloat(el.data('speed'));
    if (speed === 1) return;

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
        if ( ($(window).scrollTop() + $(window).height()) > (el.offset().top-el.height()) ) {
            if (speed < 1) {
                factor = ((parent.offset().top - $(window).scrollTop() + containerHeight)/($(window).height() + containerHeight) - 1)*(-1);
                if (factor < 0)factor = 0;
                yPos = (-el.height()+containerHeight)*factor;
            } else {
                factor = (parent.offset().top - $(window).scrollTop() + containerHeight)/($(window).height() + containerHeight);
                if (factor < 0)factor = 0;
                yPos = (-el.height()+containerHeight)*factor;
            }

            var styles = {
                'transform' : 'translate3d(0,' + ((yPos))  + 'px, 0)',
                '-webkit-transform' : 'translate3d(0,' + ((yPos))  + 'px, 0)',
                '-ms-transform' : 'translate3d(0,' + ((yPos))  + 'px, 0)'
            };
            el.find('.parallaxImage').css(styles);
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

Kwf.onJElementReady('.kwcParallaxParallaxImage', function(el) {
    if (Modernizr.touch) return;

    function updateBackgroundPosition() {
        if ($(window).width() < 650) {
            el.find('.parallaxImage').css({
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
                backgroundAttachment: 'scroll'
            });

        } else {

            if ( ($(window).scrollTop() + $(window).height()) > (el.offset().top-el.height()) ) {

                var speed = el.data('speed');
                var yPos = -(($(window).scrollTop()-el.offset().top) / (el.data('speed') ||  2));

                if (el.data('offsetY')) {
                    yPos += parseInt(el.data('offsetY'));
                }

                var coords = '50% '+ yPos + 'px';
                el.find('.parallaxImage').css({
                    backgroundPosition: coords,
                    backgroundSize: 'auto',
                    backgroundAttachment: 'fixed'
                });
            }
        }
    }

    $(window).on('scroll', updateBackgroundPosition);

    var activeTimeout = null;

    $(window).on('resize', function() {
        if (activeTimeout) clearTimeout(activeTimeout);
        activeTimeout = setTimeout(updateBackgroundPosition, 100);
    });

    updateBackgroundPosition();
});
(function() {

    $window = $(window);

    $('[data-type]').each(function() {
        $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
        $(this).data('speed', $(this).attr('data-speed'));
    });


    $('div[data-type="background"]').each(function(){
        var $self = $(this),
            offsetCoords = $self.offset(),
            topOffset = offsetCoords.top;

        function updateBackgroundPosition() {

            if ($('html').hasClass('no-touch') && $window.width() > 650) {

                if ($window.width() < 650) {
                    $self.css({ backgroundPosition: '50% 50%', 'background-attachment': 'unset', 'background-size': 'cover' });
                    return;
                }

                if ( ($window.scrollTop() + $window.height()) > (topOffset-$self.height()) ) {

                    var speed = $self.data('speed');
                    var yPos = -($window.scrollTop() / ($self.data('speed') ||  2));

                    if ($self.data('offsetY')) {
                        yPos += $self.data('offsetY');
                    }

                    var coords = '50% '+ yPos + 'px';
                    $self.find('.parallaxImage').css({ backgroundPosition: coords, 'background-attachment': 'fixed', 'background-size': 'auto' });
                }
            }
        }

        $(window).on('scroll resize', updateBackgroundPosition);
        updateBackgroundPosition();
    });

})();
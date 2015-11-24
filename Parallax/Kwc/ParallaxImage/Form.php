<?php
class Parallax_Kwc_ParallaxImage_Form extends Kwc_Abstract_Composite_Form
{
    protected function _initFields()
    {
        parent::_initFields();

        $fs = $this->add(new Kwf_Form_Container_Fieldset(trlKwf('Parallax effect')));

        $fs->add(new Kwf_Form_Field_NumberField('parallax_speed', trlKwf('Parallax speed')))
            ->setAllowDecimals(true)
            ->setAllowNegative(false)
            ->setDecimalPrecision(1);

        $fs->add(new Kwf_Form_Field_Static(trlKwf('Parallax velocity lower than 1 = faster than scrolling (ex: 0,5 = 200%)')));
        $fs->add(new Kwf_Form_Field_Static(trlKwf('Parallax velocity higher than 1 = slower than scrolling (ex: 2 = 50%)')));
        $fs->add(new Kwf_Form_Field_Static('<br>'.trlKwf('Note that when enabled Parallaxeffect the image must be upscaled and may '.
            'be parts of the picture are cut off. If possible, choose a slightly larger area than the ideal view.')));
    }
}

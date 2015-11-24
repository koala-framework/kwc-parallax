<?php
class Parallax_Kwc_ParallaxImage_Component extends Kwc_Abstract_Composite_Component
{
    public static function getSettings()
    {
        $ret = parent::getSettings();
        $ret['generators']['child']['component']['image'] = 'Parallax_Kwc_ParallaxImage_Image_Component';
        $ret['ownModel'] = 'Parallax_Kwc_ParallaxImage_Model';
        $ret['assets']['dep'][] = 'ModernizrTouchevents';
        $ret['assetsDefer']['files'][] = 'kwcParallax/Parallax/Kwc/ParallaxImage/ParallaxEffect.js';
        return $ret;
    }

    public function getTemplateVars()
    {
        $ret = parent::getTemplateVars();
        $ret['parallaxSpeed'] = $this->getRow()->parallax_speed;
        return $ret;
    }
}


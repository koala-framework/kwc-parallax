<?php
class Kwc_Parallax_ParallaxImage_Component extends Kwc_Abstract_Composite_Component
{
    public static function getSettings()
    {
        $ret = parent::getSettings();
        $ret['generators']['child']['component']['image'] = 'Kwc_Parallax_ParallaxImage_Image_Component';
        $ret['ownModel'] = 'Kwc_Parallax_ParallaxImage_Model';
        $ret['assets']['dep'][] = 'ModernizrTouchevents';
        $ret['assetsDefer']['files'][] = 'kwcParallax/Kwc/Parallax/ParallaxImage/ParallaxEffect.js';
        return $ret;
    }

    public function getTemplateVars()
    {
        $ret = parent::getTemplateVars();
        $ret['parallaxSpeed'] = $this->getRow()->parallax_speed;
        return $ret;
    }
}


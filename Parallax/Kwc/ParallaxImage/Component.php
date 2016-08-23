<?php
class Parallax_Kwc_ParallaxImage_Component extends Kwc_Abstract_Composite_Component
{
    public static function getSettings($param = null)
    {
        $ret = parent::getSettings($param);
        $ret['generators']['child']['component']['image'] = 'Parallax_Kwc_ParallaxImage_Image_Component';
        $ret['ownModel'] = 'Parallax_Kwc_ParallaxImage_Model';
        $ret['assets']['dep'][] = 'ModernizrTouchevents';
        $ret['assetsDefer']['files'][] = 'kwcParallax/Parallax/Kwc/ParallaxImage/ParallaxEffect.js';
        return $ret;
    }

    public function getTemplateVars(Kwf_Component_Renderer_Abstract $renderer = null)
    {
        $ret = parent::getTemplateVars($renderer);
        $ret['parallaxSpeed'] = $this->getRow()->parallax_speed;
        return $ret;
    }
}


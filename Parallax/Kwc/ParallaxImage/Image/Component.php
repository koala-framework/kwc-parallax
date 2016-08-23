<?php
class Parallax_Kwc_ParallaxImage_Image_Component extends Kwc_Basic_Image_Component
{
    public static function getSettings($param = null)
    {
        $ret = parent::getSettings($param);
        $ret['componentName'] = trlKwfStatic('Background Image');
        $ret['dimensions'] = array(
            'fullWidth'=>array(
                'text' => trlKwfStatic('full width'),
                'width' => 2560,
                'height' => 0,
                'cover' => true
            )
        );
        $ret['altText'] = false;
        return $ret;
    }

    public function getTemplateVars(Kwf_Component_Renderer_Abstract $renderer = null)
    {
        $ret = parent::getTemplateVars($renderer);
        $ret['imageUrl'] = $this->getImageUrl();
        return $ret;
    }
}

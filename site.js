$(function(){
    
    /**
     * adaptive menu changer
     */
    $('.btn-am').click(function(e){
        e.preventDefault();
        $('.am-menu').slideDown(300);    
    })
    $('.btn-am-close').click(function(e){
        e.preventDefault();
        $('.am-menu').slideUp(300);
    })          
    
    $('.cross-grid-item').each(function(i){     
        $(this).prepend('<i class="cross"></i>');  
    })
    
    var parentHeightSM = function(){
        if ($(window).width() >= 992) {
            $('.ph-sm').each(function(){
                var height = $(this).parent().height();
                if (height <= $(window).height()) {
                    $(this).height(height+'px');    
                }                  
            })        
        } else {
            $('.ph-sm').height('');    
        } 
    }
    
    var wResize = function(){
        parentHeightSM();        
    }
    
    var wLoad = function(){
        parentHeightSM();    
    }
    
    $(window).resize(wResize);
    $(window).load(wLoad);
    
    if ($('.cross-grid-box > .cross-grid-item').length <= 0) {
        $('.objecta-galeria').remove();    
    }
    
    
     
})
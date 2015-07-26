jQuery(function($){
    $('button').on('click', function(evnet){
        $('.hidden').css({display:'inline-block'}); 
        $('.blank').css({display:'inline-block'}); 
        $('.server').css({display:'inline-block'}); 
        $('.hand').css({display:'none'}); 
        $('.textClick').css({display:'none'}); 
    });
});
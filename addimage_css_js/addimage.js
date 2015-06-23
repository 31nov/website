jQuery(function($){
    var page = 1;
    var $front = $('.front');
    var $end = $('.end');
    var $middle = $('.middle');
    var $nav = $('.nav');
    var $nav1 = $('.nav1');
    var $nav2 = $('.nav2');
    var $nav3 = $('.nav3');
    var $nav4 = $('.nav4');
    var $nav5 = $('.nav5');
    var $nav6 = $('.nav6');
    var $nav7 = $('.nav7');
    var $nav8 = $('.nav8');
    var $nav9 = $('.nav9');
    var $nav10 = $('.nav10');
    $('#1').css({display:'inline'}).siblings().css({display:'none'});
    $nav1.css({background:'#000'}).css({color:'#fff'});
    $('.check1').css({top:375}).css({left:430}).css({width:330}).css({height:270});   


    $front.on('click',function(event){
        if(page > 1){
            page -= 1;
        }
        $('.nav'+page).css({background:'#000'}).css({color:'#fff'});
        $('.nav'+page).parent().siblings().children().css({background:'#fff'}).css({color:'#337ab7'});
        $('#'+page).css({display:'inline'}).siblings().css({display:'none'});
        classCheck();
        checkAnimation();
    });
    $end.on('click',function(event){
        if(page <11){
            page += 1;
        }
        $('.nav'+page).css({background:'#000'}).css({color:'#fff'});
        $('.nav'+page).parent().siblings().children().css({background:'#fff'}).css({color:'#337ab7'});
        $('#'+page).css({display:'inline'}).siblings().css({display:'none'});
        classCheck();
        checkAnimation();
    });
    $nav.on('click',function(event){
        var $this = $(this);
        page = parseInt($this.text());
        var $nav = $('#'+page);
        var $check = $('.'+page);
//        console.log(page);
//        console.log($nav);
        $this.css({background:'#000'}).css({color:'#fff'});
        $this.parent().siblings().children().css({background:'#fff'}).css({color:'#337ab7'});
        $nav.css({display:'inline'}).siblings().css({display:'none'});
        classCheck();
        checkAnimation();
        
    });
    function classCheck(){
        for(var x=1; x<=10; x++){
            $('.check').removeClass('check'+x);
        }
        $('.check').addClass('check'+page);   
    }
    function checkAnimation(){
        if($('.check').is('.check1')){
            $('.check1').animate({top:0, left:0, width:0, height:0}, 500);   
        }else if($('.check').is('.check2')){
            $('.check2').animate({top:305, left:436, width:334, height:24}, 500);   
        }else if($('.check').is('.check3')){
            $('.check3').animate({top:204, left:253, width:304, height:0}, 500);   
        }else if($('.check').is('.check4')){
            $('.check4').animate({top:295, left:253, width:314, height:0}, 500);   
        }else if($('.check').is('.check5')){
            $('.check5').animate({top:197, left:60, width:689, height:83}, 500);   
        }else if($('.check').is('.check6')){
            $('.check6').animate({top:623, left:72, width:134, height:0}, 500);   
        }else if($('.check').is('.check7')){
            $('.check7').animate({top:638, left:508, width:200, height:184}, 500);   
        }else if($('.check').is('.check8')){
            $('.check8').animate({top:564, left:111, width:636, height:129}, 500);   
        }else if($('.check').is('.check9')){
            $('.check9').animate({top:535, left:376, width:171, height:50}, 500);   
        }else if($('.check').is('.check10')){
            $('.check10').animate({top:522, left:40, width:659, height:81}, 500);   
            $('.check11').animate({top:645, left:40, width:729, height:47}, 500);   
        }else if($('.check').is('.check11')){
            $('.check11').animate({top:0, left:0, width:0, height:0}, 500);   
        }
            
    }
    $('.comment').on('click',function(event){
        $('.commentBox').slideToggle(); 
    });

});
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
    $('.check1').css({top:0}).css({left:0}).css({width:0}).css({height:0});   

    $('.page5').on('click',function(event){
        page=5;
        $nav5.css({background:'#000'}).css({color:'#fff'});
        $nav5.parent().siblings().children().css({background:'#fff'}).css({color:'#337ab7'});
        $('#5').css({display:'inline'}).siblings().css({display:'none'});
        classCheck();
        checkAnimation();
    });
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
            $('.check2').animate({top:569, left:408, width:379, height:47}, 500);   
        }else if($('.check').is('.check3')){
            $('.check3').animate({top:438, left:118, width:349, height:0}, 500);   
        }else if($('.check').is('.check4')){
            $('.check4').animate({top:457, left:43, width:745, height:448}, 500);   
        }else if($('.check').is('.check5')){
            $('.check5').animate({top:444, left:120, width:663, height:75}, 500);   
            $('.checka').animate({top:858, left:120, width:663, height:61}, 500);  
        }else if($('.check').is('.check6')){
            $('.check6').animate({top:275, left:98, width:496, height:0}, 500);   
            $('.checka').animate({top:832, left:94, width:685, height:0}, 500);  
        }else if($('.check').is('.check7')){
            $('.check7').animate({top:573, left:67, width:228, height:0}, 500);   
            $('.checka').animate({top:662, left:482, width:135, height:0}, 500);  
        }else if($('.check').is('.check8')){
            $('.check8').animate({top:825, left:40, width:82, height:0}, 500);  
        }else if($('.check').is('.check9')){
            $('.check9').animate({top:425, left:95, width:577, height:0}, 500);   
            $('.checka').animate({top:721, left:73, width:276, height:62}, 500);  
        }else if($('.check').is('.check10')){
            $('.check10').animate({top:0, left:0, width:0, height:0}, 500);   
        } 
    }
    $('.comment').on('click',function(event){
        $('.commentBox').slideToggle(); 
    });

});
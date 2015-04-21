// 게임 리스트 나오게 하기    
var j = 12;
var liText ='';
var gameListForm = [];

   for(i=0;i<j;i++){
       if(i % 2 == 0){
           liText += '<li><a href="game'+i+'">게임'+i+'</a></li>';
           
       }else{
           liText += '<li><a href="game'+i+'">게임'+i+'</a></li>';
       }
   }
$('#gamelistul').html(liText);

for(var i=1;i<=j;i++){
    if(i % 2 ===0){
    document.querySelector("#gamelistul> li:nth-child("+i+")> a").style.background = '#989898';
    }else{
    document.querySelector("#gamelistul> li:nth-child("+i+")> a").style.background = '#666';   
    }
}


jQuery(function($){
    
    // gamebtn 토글 버튼	
	var	$gamebtn = $(".gamebtn");
	var	$gamelist = $(".gamelist");
	var	$gamebtnToggle = $(".gamebtnToggle");
	var	$main = $("#main");
	var	$lnbbtn = $(".lnbbtndiv");
	var	$gnbbtn = $(".gnbbtn");
	var	$gnbMenu = $(".gnbMenu");
	var	$footer = $("footer");
    var toggleOn = false;

	$gamebtn.on('click',function(){
		$gamelist.toggle("slide");
        if($gamebtnToggle.text() == '추천메뉴 열기'){
            $gamebtnToggle.text('추천메뉴 닫기');
            $main.animate({left: '90px'});
            $lnbbtn.animate({left: '90px'});
            var target = 0;
                if(toggleOn ==false){
                    target = 118;
                }else{
                    target = 268;   
                }
                $gnbbtn.animate({left: target});
                $gnbMenu.animate({left: target-150});
                $footer.animate({left: '90px'});
                
        }else{
            $gamebtnToggle.text('추천메뉴 열기');
            $main.animate({left: '0'});
            $lnbbtn.animate({left: '0'});
            var target2 = 0;
                if(toggleOn == false){
                    target2 = 0;
                }else{
                    target2 = 150;   
                }
                $gnbbtn.animate({left:target2});
                $gnbMenu.animate({left: target2-150});
                $footer.animate({left: '32px'});         
        }
    });	

    // gnbbtn 토글 버튼
    var $gnbbtnToggle = $('.gnbbtnToggle');
    $('.gnbbtn').on('click',function(event){
        if(toggleOn == false){
            $(window).on("mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll", function(e) {
                e.preventDefault();
                return;
            });//스크롤 막기
            
            $gnbbtnToggle.text('메뉴 닫기');
            if($gamebtnToggle.text() === '추천메뉴 열기'){
                $(this).animate({left: 150},300);
                $gnbMenu.css({display: 'block'});
                $gnbMenu.animate({left: 0},300);
            }else{
                $(this).animate({left: 268},300);
                $gnbMenu.css({display: 'block'});
                $gnbMenu.animate({left: 118},300);
            }
            toggleOn = true;
        }else{
            
            $gnbbtnToggle.text('메뉴 열기');
            if($gamebtnToggle.text() === '추천메뉴 열기'){
                $(this).animate({left: 0},300);
                $gnbMenu.animate({left: -150},300);
            }else{
                $(this).animate({left: 118},300);
                $gnbMenu.animate({left: -150},300);
            }
            $(window).off(".disableScroll");//스크롤 막기
            toggleOn =false;
        }
    });
    
    //gnbMenu ul>li>a 색상 넣기
    $('.gnbMenu > ul >li :even').css({background:'#FFEBD8'});
    $('.gnbMenu > ul >li :odd').css({background:'#FFF7EF'});
    
    
    $('.gnbbtn').on('click',function(event){
    $(window).trigger('scroll');
//        console.log($(window).scrollTop());
        $(window).on('scroll',function(event){
            //gnbMenu 높이 맞추기
            var gnbHeight = $(window).height()-$('.bottommenu').height();
            var head_singleHeight = $('.header_single').height();
            $gnbMenu.css({'height':gnbHeight-head_singleHeight});

            //gnbList 높이 맞추기
            var $gnbLi = $('.gnbMenu li');
            var $gnbLiA = $('.gnbMenu li >a');
            if($(window).scrollTop() > head_singleHeight){
                $gnbMenu.css({top: 0});
                $gnbLi.css({
                    height:gnbHeight/$gnbLi.length
                });
                $gnbLiA.css({
                    height:gnbHeight/$gnbLi.length
                });
            }else{
                $gnbMenu.css({top: head_singleHeight-$(window).scrollTop()});
                $gnbLi.css({
                    height:(gnbHeight-head_singleHeight)/$gnbLi.length
                });
                $gnbLiA.css({
                    height:(gnbHeight-head_singleHeight)/$gnbLi.length
                });
            }
        });
    });
});

        

//jQuery(function($){
//    var point = 0;
//    var point1 = 0;
//    var point2 = 0;
//    var point3 = 0;
//    
//    $('.1point').on('click',function(event){
//        point= point+1;
//        point1 = point1+1;
//        $('.totalPoint').html(point+'점');
//        $('.total1Point').html('1점 득점 : '+point1+'골');
//        console.log(point);
//    });
//    
//    $('.2point').on('click',function(event){
//         point = point+2;
//        point2 = point2+1;
//        $('.totalPoint').html(point+'점');
//        $('.total2Point').html('2점 득점 : '+point2+'골');
//        console.log(point);
//    });
//    
//    $('.3point').on('click',function(event){
//         point = point+3;
//        point3 = point3+1;
//        $('.totalPoint').html(point+'점');
//        $('.total3Point').html('3점 득점 : '+point3+'골');
//        console.log(point);
//    });
//    
//});



















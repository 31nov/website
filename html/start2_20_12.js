// 게임 리스트 나오게 하기    
var j = 4;
var liText ='';
   for(i=0;i<j;i++){
       if(i % 2 == 0){
           liText += '<li><a class="blackback" href="game'+i+'">게임'+i+'</a></li>'; 
       }else{
           liText += '<li><a class="grayback" href="game'+i+'">게임'+i+'</a></li>';
       }
   }
$('#gamelistul').html(liText);

// gamebtn 토글 버튼	
jQuery(function($){
	var	$gamebtn = $(".gamebtn");
	var	$gamelist = $(".gamelist");
	var	$gamebtnToggle = $(".gamebtnToggle");
	var	$main = $("#main");
	var	$lnbbtn = $(".lnbbtndiv");
	var	$gnbbtn = $(".gnbbtn");
	var	$footer = $("footer");

	$gamebtn.click(function(){
		$gamelist.toggle("slide");
        if($gamebtnToggle.text() == '추천메뉴 열기'){
            $gamebtnToggle.text('추천메뉴 닫기');
            $main.animate({left: '90px'});
            $lnbbtn.animate({left: '90px'});
            $gnbbtn.animate({left: '118px'});
            $footer.animate({left: '90px'});
        }else{
            $gamebtnToggle.text('추천메뉴 열기');
            $main.animate({left: '0'});
            $lnbbtn.animate({left: '0'});
            $gnbbtn.animate({left: '0'});
            $footer.animate({left: '32px'});         
                   
        }
        
//        $(".gamelist").toggle("slide");
//        
//        
//		if( $gamebtn.html() == '<img src="gamebtn.png">추천메뉴 닫기') {
//            $gamebtn.html('<img src="gamebtn.png">추천메뉴 열기');
//            $('#main').animate({left: '0'});
//            $('.lnbbtn').animate({left: '0'});
//            $('.gnbbtn').animate({left: '0'});
//            $('footer').animate({left: '32px'});
//		}else{
//            $gamebtn.html('<img src="gamebtn.png">추천메뉴 닫기');
//            $('#main').animate({left: '90px'});
//            $('.lnbbtn').animate({left: '90px'});
//            $('.gnbbtn').animate({left: '90px'});
//            $('footer').animate({left: '90px'});
//        }
	});	
});


//// TABLET & DESKTOP의 GNB 메뉴
//	$(".gnb>ul>li>a").on("mouseover focus", function(){
//		$(this).parent().addClass("active").siblings().removeClass("active");
//		//parent(li)라고 써야하지만 this의 부모는 무조건 li이기때문에 생략가능
//		//siblings 전체를 선택하라는 의미고, 
//		//removeclass로 지워주라는 의미.
//	});	
// jQuery = $
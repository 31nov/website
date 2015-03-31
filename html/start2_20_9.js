jQuery(function($){
// gamebtn 토글 버튼	
	var	$gamebtn = $(".gamebtn");
	$gamebtn.click( function(){
		$(".gamelist").toggle("slide");
		if( $gamebtn.html() == '<img src="gamebtn.png">추천메뉴 닫기') {
            $gamebtn.html('<img src="gamebtn.png">추천메뉴 열기');
		}else{
            $gamebtn.html('<img src="gamebtn.png">추천메뉴 닫기');
		}
	});	

//// TABLET & DESKTOP의 GNB 메뉴
//	$(".gnb>ul>li>a").on("mouseover focus", function(){
//		$(this).parent().addClass("active").siblings().removeClass("active");
//		//parent(li)라고 써야하지만 this의 부모는 무조건 li이기때문에 생략가능
//		//siblings 전체를 선택하라는 의미고, 
//		//removeclass로 지워주라는 의미.
//	});	
});
// jQuery = $
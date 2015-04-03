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
    });	
});

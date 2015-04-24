//0-1. 전역 변수
var date = new Date();
jQuery(function($){
    
    //1-1. gameList 변수
    var $gamelistul = $('#gamelistul');
    var $tpl = $gamelistul.find('>li').remove();
    var data = {items : []};
    
    //2-1. gamebtn/gnbbtn 변수
	var	$gamebtn = $(".gamebtn");
	var	$gamelist = $(".gamelist");
	var	$gamebtnToggle = $(".gamebtnToggle");
	var	$main = $("#main");
	var	$lnbbtn = $(".lnbbtndiv");
	var	$gnbbtn = $(".gnbbtn");
	var	$gnbMenu = $(".gnbMenu");
	var	$footer = $("footer");
    var toggleOn = false;
    
    //3-1. main 변수(변경할 것)
    var $mainUl = $('#main >ul');
    var $mainLi = $('#main > ul >li').remove();
    var mainData = {
        users : [],
//            userId: '',
//            userPic: '',
//            userName: ''
        writes : []
//            writeId: '',
//            wirteDate: '',
//            writeTitle: '',
//            commentCount: '',
//            smileCount: ''
    };
    
    //1-2. game을 배열로 만들어, items에 넣기
    for(var i = 0; i < 100; i++){
        var j = i%5
        var item={
            id: data.items.length +1,
            name: 'Game #'+i,
            image: 'gameimage'+j+'.png',
            comment: '('+Math.floor(Math.random() *100)+')'
        };
        data.items.push(item);
    }
    //1-3. game 나열하기
    for(var i = 0; i < data.items.length; i++){
        $tpl.clone()
            .find('.gameImg').attr('src', data.items[i].image).end()
            .find('.gameTitle').text(data.items[i].name).end()
            .find('.comment').text(data.items[i].comment).end()
            .appendTo($gamelistul);
    }
    
    //2-2. gamebtn 토글 버튼	
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

    
    //2-3. gnbbtn 토글 버튼
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
    
    //2-4.gnblist moving
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
//                $gnbMenu.css({top: 0});
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
    
    //3-2. 게시판 리스트 작성
    for(var i = 0; i < 100; i++){
        var j = i%4
        var user ={
            userId : mainData.users.length +1,
            userPic : 'user'+j+'.png',
            userName : '홍길동 #'+i
        };
        var write={
            writeId: mainData.writes.length +1,
            writeDate: date,
            writeTitle: '게시글 목록 #'+i,
            commentCount: Math.floor(Math.random() *100),
            smileCount: Math.floor(Math.random() *100),
        };
        mainData.users.push(user);
        mainData.writes.push(write);
    }
    //3-3. 게시글 나열하기
    for(var i = 0; i < mainData.writes.length; i++){
        $mainLi.clone()
            .find('.userPic').attr('src', mainData.users[i].userPic).end()
            .find('.userName').text(mainData.users[i].userName).end()
            .find('.writeDate').text(mainData.writes[i].writeDate).end()
            .find('.writeTitle').text(mainData.writes[i].writeTitle).end()
            .find('.commentCount').text(mainData.writes[i].commentCount).end()
            .find('.smileCount').text(mainData.writes[i].smileCount).end()
            .appendTo($mainUl);
    }
    
    //4-1. gnbMenu ul>li>a 색상 넣기
    $('.gnbMenu > ul >li :even').css({background:'#FFEBD8'});
    $('.gnbMenu > ul >li :odd').css({background:'#FFF7EF'});

    //5-1. mainList 변수
    var $mainList = $('#main> ul >li');
    var $writeUserInfor = $('.writeUserInfor');
    var $userPic = $('.userPic');
    var $connectUser = $('.connectUser');
    var $countView = $('.countView');
    
    //5-2. mainList height 가변 값 만들기
    function mainListHeight(x,y){
        $mainList.css({height:x+y+20});
        $writeUserInfor.css({height: x});
        $userPic.css({height:x-4});
        $userPic.css({width:x-4});
        $connectUser.css({height: x});
        $countView.css({top:x+y});        
    };
    mainListHeight(50,30);

    //6-1. scroll조작 시 head_single, bottommenu 보이고,사라지고...
    var prevScrollTop = 0;
    var $header_single = $('.header_single');
    var $gamelist = $('.gamelist');
    var $gnbbtn = $('.gnbbtn');
    var $bottommenu = $('.bottommenu');
    $(window).on('scroll', function(event){
        var $this = $(this);
        var scrollTop = $this.scrollTop();
		
        //6-2. 변수: scroll의 이전위치, 현재위치 체크
        if(scrollTop > prevScrollTop){ //스크롤을 내릴 때 & 내리고 멈춘 상태
//            $header_single.animate({top:-42});
            $header_single.css({visibility: 'hidden'}); 
            $bottommenu.css({visibility: 'visible'}); 
            $gnbbtn.css({visibility: 'visible'}); 
        }else{ //스크롤을 올릴 때 & 올리고 멈춘 상태
//            $header_single.animate({top:0});
            $header_single.css({visibility: 'visible'}); 
            $bottommenu.css({visibility: 'hidden'}); 
        }
        prevScrollTop = scrollTop;
        //6-5. 스크롤이 올라가고 있을 때
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



















$(document).ready(function(){
	var swi = $(window).width();
	$('footer').css('bottom','0');
	$('section:first-child').addClass('swiper-slide-active');
	
	// 브라우저 높이, section 높이 적용 contact 위치 적용
	var bg = $(window).height();
	$('section').css('height',bg);
	//$('#contact').css({"height":(bg-80)+"px"});
	//.css({"background-position":(40+posX/60)+"%"});

	
	
	// 브라우저 사이즈 변경 시 section 높이 적용 contact 위치 적용
	$(window).resize(function(){
		var rbg = $(window).height();
		$('section').css('height',rbg);
		//$('#contact').css('top',rbg+'100px');
		$("html,body").stop().animate({"scrollTop":'0'},1000);
	//	$('#contact').css('height',rbg);
	});
	
	// logo 클릭
/*	$('.logo').on('click',function(){
		$("html,body").stop().animate({"scrollTop":'0'},1000);
		$('#contact').css('top',bg);
		$(".contact_close").removeClass('on');
	});
*/	

// contact 메뉴 클릭//('top','80px')
	$('.menu').on('click',function(){
		$('#contact').css("transform","translateY(0%)");
		$('.contact_close').addClass('on');
		//read more 종료
		$(".exhb_read, .read_more, .read_close, .bg, .exhb_read .exhb_intro").removeClass('on');
		
		$('section').addClass('swiper-slide-active');
		$('section > .exhb_intro').removeClass('on');
	});
		
	$('.contact_close, section').on('click',function(){
		$('#contact').css("transform","translateY(100%)");
		$('.contact_close').removeClass('on');
	//	$('#contact').stop().animate({"scrollTop":'0'},0);
	});
	
// exhibition 메뉴 클릭
	$('.exhb_area').on('click',function(){
		$('#contact').css("transform","translateY(100%)");
		$('#exhb_space').addClass('on');
		$('.exhb_space_tlt').addClass('on');
		$('.exhb_close').addClass('on');
		$('.contact_close').removeClass('on');
		// read more 종료
		$(".exhb_read, .read_more, .read_close, .bg, .exhb_read .exhb_intro").removeClass('on');
		$('header').css('opacity','1');
		$('section > .exhb_intro').removeClass('on');
	});
	
	// exhibition 메뉴 닫기
	$('.exhb_close').on('click',function(){
		$('#exhb_space').removeClass('on');
		$('.exhb_close').removeClass('on');
		$('.exhb_space_tlt').removeClass('on');
		$('#exhb_space').stop().animate({"scrollTop":'0'});
	});	
	
	// exhhibition 내부 목록 클릭 시 페이지 이동
	var swi = $(window).width();
	if(swi > 977){
		$('#exhb_space ul li').on('click',function(e){
			e.preventDefault();
			
			
			var ht = $(window).height();
			
			//li 순서값 저장
			var i = $(this).index();
		
			var nowTop = i*ht;
			$('#exhb_space').removeClass('on');
			$("html,body").stop().animate({"scrollTop":nowTop},1000);
		});
	}
	
		
	// read more 클릭
	$('.read_more').on('click',function(){
	
		$(".exhb_read, .read_more, .read_close, .bg, .exhb_read .exhb_intro").addClass('on');
		$('header').css('opacity','0.75');
		$('section > .exhb_intro').addClass('on');		
	});
	
	$('.exhb_read, .read_close').on('click',function(){
		$(".exhb_read, .read_more, .read_close, .bg, .exhb_read .exhb_intro").removeClass('on');
		$('header').css('opacity','1');
		$('section > .exhb_intro').removeClass('on');
	
	});

	
	
	// 마우스 이동할때 배경 반응
	$(window).on("mousemove",function(e){ 
		if(swi >977){
			var posX= e.pageX; 
			//var posY= e.pageY;  
			
			$("section").css({"background-position":(40+posX/20)+"%"});
			
			//$("section").css({"right":130+(posX/20) , "bottom":-40+(posY/20) }); 
		}
	});
	
	
	// 스크롤 이동시 section의 타이틀 등 나타남

	$(window).on("scroll",function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();
		var leng = $('section').size(); // section의 총 개수
		
		
		
		for(var i=0; i<leng; i++){
			if(scroll>=ht*i && scroll<=ht*(i+1)){
				
				$('section').removeClass('swiper-slide-active');
				//$("section").removeClass("on");
				$(".exhb_read, .read_more, .read_close, .bg, section > .exhb_intro").removeClass('on');
			
				
				$('section').eq(i).addClass('swiper-slide-active');
				
			//	$(".read_more").text( $("section > .exhb_intro .exhb_tlt").eq(i).text() );
				
			
			};
		
		};	
		
		
	});
		
		
	$(".in").on("click",function(){
		//background: rgba(0,0,0,0);
		$('header, .exhb_intro, .read_more, .bt_line, .menu, .in').css('display','none');
		$('.bg').addClass('op');
		$('.out').css('display','block');
		$('.out').css('height',bg);
		$('section').css('background-position','50%');
		
	});
	
	
	$(".out").on("click",function(){
		//background: rgba(0,0,0,0);
		$('header, .exhb_intro, .read_more, .bt_line, .menu, .in').css('display','block');
		$('.bg').removeClass('op');
		$('.out').css('display','none');
	
		
	});
	
	$(window).on("click",function(){
		var a = $('section').size();
		//$(".read_more").text(a);
		
	
	
		//$(".read_more").text( $(".ht").text() );
	});
	
	
	// 마우스 휠 이동시 scrolltop
	$("section").on("mousewheel",function(event,delta){
		
		var swi = $(window).width();
	
		if(swi > 977){
		//i 0미만 12이상 안되게 하기 최대값 section 길이로 구하기 lengh?
			if (delta > 0) {
				var prev = $(this).prev().offset().top;
				$("html,body").stop().animate({"scrollTop":prev},1000);
				$('header').css('opacity','1');$(".read_more").text(i);
			}
			else if (delta < 0) {
				var next = $(this).next().offset().top;
				$("html,body").stop().animate({"scrollTop":next},1000);
				$('header').css('opacity','1');$(".read_more").text(i);
				}
		
		}
		
	});
	

});

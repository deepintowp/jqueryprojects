jQuery(document).ready(function($){
	navBarOffseTop = $('.main_menu').offset().top;
	scrollTOp = $(window).scrollTop();
	$('.main_menu').wrap('<div class="placeholder_nav_wrap"></div>');
	$('.placeholder_nav_wrap').height($('main_menu').outerHeight());
	if(scrollTOp > navBarOffseTop){
			$('.main_menu').addClass('sticky');
		}else{
			$('.main_menu').removeClass('sticky');
		}
	
	$(window).scroll(function(){
		scrollTOp = $(window).scrollTop();
			
		if(scrollTOp > navBarOffseTop){
			$('.main_menu').addClass('sticky');
		}else{
			$('.main_menu').removeClass('sticky');
		}
	});
	
	
	
});
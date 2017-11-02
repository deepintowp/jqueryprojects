jQuery(document).ready(function($){
	
	
	$.fn.revealeOnScroll = function(){
		
		
		
		return this.each(function(){
			
			if($(this).hasClass('animation-complete')){ return; }
				$(this).css('opacity', '0');
				var windowHeight = $(window).height();
				var scrolltop = $(window).scrollTop();
				var scrollBottom = windowHeight +  scrolltop;
				var elementDistenceFromTop = $(this).offset().top;
				if(scrollBottom > elementDistenceFromTop ){
					$(this).animate({opacity: '1'}, 1500);
					$(this).addClass('animation-complete');
				}
			
		});
		
		
		
		
	};

	$(window).scroll(function(){
		
			var windowHeight = $(window).height();
			var scrolltop = $(window).scrollTop();
			var scrollBottom = windowHeight +  scrolltop;
			$('.image1, .abcd, .abcd1, ul li').revealeOnScroll();
	});
	
	
	

	
});
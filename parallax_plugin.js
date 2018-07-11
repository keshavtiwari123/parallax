(function($)
{
	$.fn.parallax_scroll = function(speed)
	{	
		if(speed > 1){ speed=speed*-1;}
		if(speed > 0 && speed < 1){speed = 1 - speed}
		var x = $(this);
		var height = x.position().top;
		if(x.css('position') == 'static'){ x.css('position', 'absolute');}
		var scroll = $(document).scrollTop();
		x.css('top',  height+scroll*speed+'px');
		$(document).scroll(function(){
			scroll = $(document).scrollTop();
			x.css('top',  height+scroll*speed+'px');
		});
	}
}
)(jQuery);

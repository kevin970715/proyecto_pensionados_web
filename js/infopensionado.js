$(function(){
		$(".slide").click(function(){
				var slid=$(this).css("background-image");
				$(".slider").css({"display":"none","background-image":slid,"display":"block"});		
			});
	});
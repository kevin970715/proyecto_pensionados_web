$(document).ready(function(){
		$(".mosaico").click(function(){
				var slid=$(this).css("background-image");
				$("#imagenPrincipal").css({"display":"none","background-image":slid,"display":"block"});		
			});
	});

$(".boton-banner").on("click", function(){
    var posicion = $("#economicos").offset().top;
    $("html, body").animate({
        scrollTop: posicion-50
    }, 2000); 
});
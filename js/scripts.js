function docInit(){
	var newWidth = $("body").outerWidth();
	if(newWidth > 840)
	{ $("meta[name='viewport']").attr("content", "user-scalable=no, width=device-width, initial-scale=0.9, maximum-scale=1"); }
	else
	{ $("meta[name='viewport']").attr("content", "user-scalable=no, width=device-width, initial-scale=0.4, maximum-scale=1"); }
}
$(document).ready(function(){
	docInit();

	$(".text-bl").removeClass("open");
	var textNav = $(".nav-text").length;
	for(var i=0;i<textNav;i++){var openBl = $(".nav-text").eq(i).find(".selected").eq(0).find("a").attr("href");$(openBl).addClass("open");}
	$(".nav-text a").on("click", function(){
		if( $(this).parent().hasClass("selected") != true )
		{
			var oldBl = $(this).parent().parent().find(".selected").eq(0).find("a").attr("href");$(oldBl).removeClass("open");
			$(this).parent().parent().find(".selected").eq(0).removeClass("selected");
			$(this).parent().addClass("selected");
			var openBl = $(this).attr("href");$(openBl).addClass("open");
		}
		return false;
	});
});
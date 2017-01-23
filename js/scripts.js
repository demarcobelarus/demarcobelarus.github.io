function docInit(){
	var newWidth = $("body").outerWidth();
	if(newWidth > 840)
	{ $("meta[name='viewport']").attr("content", "user-scalable=no, width=device-width, initial-scale=0.9, maximum-scale=1"); }
	else
	{ $("meta[name='viewport']").attr("content", "user-scalable=no, width=device-width, initial-scale=0.4, maximum-scale=1"); }
}
$(document).ready(function(){
	docInit();
});
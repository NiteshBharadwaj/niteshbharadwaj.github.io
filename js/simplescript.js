/**
*
*/
$(document).ready(function(){
	setup();
	$(".full-name").click(function(){
		toggleName()
	});
});
function setup() {
	var	obj = $("#logo > h1").html("Nitesh Bharadwaj<a href=\"#\" class=\"full-name\">_G</a>");
	var obj1 = $(".slogan").text("\"The fool didn't know it was impossible, \n so he did it.\" - Anonymous");
	obj1.html(obj1.html().replace(/\n/g,'<br/>'));
	$("#footer").html("<p>Copyright &copy; <a href=\"#\"> Illusionist</a>| <a href=\"http://validator.w3.org/check?uri=referer\">HTML5</a> | <a href=\"http://jigsaw.w3.org/css-validator/check/referer\">CSS</a> | <a href=\"http://www.html5webtemplates.co.uk\">design from HTML5webtemplates.co.uk</a></p>");
	$('a.read_more').click(function(event){ 
        event.preventDefault(); 
        $(this).parent().find('.more_text').show(); 
		$(this).hide();
    });
}
function toggleName() {
	var n = $(".full-name").text().length;
	if (n==2) {
		$(".full-name").text("_Gundavarapu");
	}
	else{
		$(".full-name").text("_G");
	}
}

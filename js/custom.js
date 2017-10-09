$(document).ready(function(){
	$(".menu-icon").on("click", function(){
		$("nav ul").toggleClass("expanded");
	});
});


$(".smooth-scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
	});

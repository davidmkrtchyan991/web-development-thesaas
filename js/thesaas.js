$(document).ready(function(){
	
  //menu sliding process
  if ($(window).width() <= 600) {
  	  $("nav  ul  li").click(function() {
		$(this).children("ul").slideToggle(500);
	});

  }
  $(".cross-mark").click(function() {
  		$("nav").css("display", "none");
  });
   $(".menu-hamburger").click(function() {
  		$("nav").css("display", "block");
  });

});
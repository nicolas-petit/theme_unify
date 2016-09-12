$(document).ready(function() {
	$.getScript("/theme_unify/static/assets/plugins/backstretch/jquery.backstretch.min.js", function(){
		$(".fullscreen-static-image").backstretch([
	  "/theme_unify/static/assets/img/bg/img11.jpg", "/theme_unify/static/onepage/assets/classic/img/bg/img1.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image1").backstretch([
	  "/theme_unify/static/assets/img/bg/img10.jpg",
	  ], {duration: 8000, fade: 800});	  
		$(".fullscreen-static-image2").backstretch([
	  "/theme_unify/static/assets/img/bg/img4.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image3").backstretch([
	  "/theme_unify/static/assets/img/bg/img5.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image4").backstretch([
	  "/theme_unify/static/assets/img/bg/img6.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image5").backstretch([
	  "/theme_unify/static/assets/img/bg/img7.jpg",
	  ], {duration: 8000, fade: 800});
		$(".fullscreen-static-image6").backstretch([
	  "/theme_unify/static/assets/img/bg/img8.jpg",
	  ], {duration: 8000, fade: 800});
	});
});

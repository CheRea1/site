setTimeout (function(){
    $('.logoPreloader').removeClass('opacity0');
}, 500);
setTimeout (function(){
    $('.progress').addClass('w100');
}, 500);
setTimeout (function(){
    $('#preloader').addClass('opacity0');
}, 1500);
setTimeout (function(){
    $('#preloader').addClass('hidden');
}, 4000);

$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('.navbar').removeClass("navbar-static-top");
		$('.navbar').addClass("navbar-fixed-top");
	} else {
		$('.navbar').addClass("navbar-static-top");
		$('.navbar').removeClass("navbar-fixed-top");
	}
});


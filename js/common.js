$(document).ready(function(){

	// mobile header menu
    $("#sandwich, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
        $("#mobile-menu").toggle(600);
    });

    // change color header
	$(window).scroll(function(){
		if( $(window).scrollTop() > 300 ){
			$('header').addClass('scrollTop');
		}else{
			$('header').removeClass('scrollTop');
		}
	});
	$(window).scroll();


	$('.map-item-wrap').click(function(){
		$('.map-item-wrap').removeClass('active');
		$(this).addClass('active');
	});



	$("#clock-hrc").countdown("2018/06/30", function(event) {
        $(this).html(
            // event.strftime('%D%H%M%S')
            event.strftime('<span class="s1">0</span><span>%D</span><span>%H</span><span>%M</span><span>%S</span>')
        );
    });

    $("#clock-cny").countdown("2018/11/30", function(event) {
        $(this).html(
            event.strftime('<span class="s1">0</span><span>%D</span><span>%H</span><span>%M</span><span>%S</span>')
        );
    });


    $('.side-information .information-item').click(function(){
		$('.side-information .information-item').removeClass('active');
		$(this).addClass('active');
		let indexItem = $(this).index();
		$('.content-information-box .content-text').removeClass('active');
		$('.content-information-box .content-text:nth-child(' + indexItem + ')').addClass('active');
		$('html, body').animate({
	        scrollTop: $("#content-information-box").offset().top -80
	    }, 500);
	});



	$('.company img').mouseover(function(){
		let src = $(this).attr('src');
		src = src.replace('.png', '-hover.png');
		$(this).attr('src', src);
	});
	$('.company img').mouseout(function(){
		let src = $(this).attr('src');
		src = src.replace('-hover.png', '.png');
		$(this).attr('src', src);
	});
});
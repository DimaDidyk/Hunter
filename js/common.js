$(document).ready(function(){

	// mobile header menu
    $("#sandwich, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
        $("#mobile-menu").toggle(600);
    });

    // change color header
	$(window).scroll(function(){
		console.log( $(window).scrollTop() );

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



    // Grab the current date
	var currentDate = new Date(2018, 05, 26 );
	console.log( currentDate );


	// Instantiate a coutdown FlipClock
	clock1 = $('#clock-ch').FlipClock(currentDate, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true
	});

	// Instantiate a coutdown FlipClock
	clock2 = $('#clock-en').FlipClock(currentDate, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true
	});
});
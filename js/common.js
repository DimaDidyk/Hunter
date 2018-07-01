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



    // var clock = $('#clock-hrc').FlipClock({
    // // ... your options here
    // });
    // // Grab the current date
    var currentDate = new Date();

    // Set some date in the past. In this case, it's always been since Jan 1
    var pastDate  = new Date(currentDate.getFullYear(), 0, 1);

    // Calculate the difference in seconds between the future and current date
    var diff1 = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;

    var diff2 = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;


    // Instantiate a coutdown FlipClock
    clock = $('#clock-hrc').FlipClock(diff1, {
        clockFace: 'DailyCounter',
        showSeconds: true
    });
    clock = $('#clock-cny').FlipClock(diff2, {
        clockFace: 'DailyCounter',
        showSeconds: true
    });

	// $("#clock-hrc").countdown("2018/06/30", function(event) {
 //        $(this).html(
 //            // event.strftime('%D%H%M%S')
 //            event.strftime('<span class="s1">0</span><span>%D</span><span>%H</span><span>%M</span><span>%S</span>')
 //        );
 //    });

 //    $("#clock-cny").countdown("2018/11/30", function(event) {
 //        $(this).html(
 //            event.strftime('<span class="s1">0</span><span>%D</span><span>%H</span><span>%M</span><span>%S</span>')
 //        );
 //    });


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


    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });

    jQuery.scrollSpeed(100, 800);

    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });

});



// jQuery(function ($) {
//     var $doc = $(document),
//         ratio = $doc.height() / $(window).height(), //отношение окна к общей ширене блока, чтобы тянуть весь блок.
//         mousepos, to;
//     $doc.on('mousedown', '#content', dragstart);

//     function dragstart(e) {
//         e.preventDefault();
//         mousepos = e.screenY;
//         $doc.on('mousemove.drag', drag); //в неймспейсе drag, чтобы потом отключить безболезненно для остальных листенеров
//         $doc.one('mouseup', dragstop);
//     }

//     function drag(e) {
//         clearTimeout(to);
//         var delta = (e.screenY - mousepos) * ratio;
//         to = setTimeout(function () { // таймаут чтобы события от мыши не перекрывали друг друга, 
//             $doc.scrollTop($doc.scrollTop() + delta);
//             mousepos = e.screenY;
//         }, 1);
//     }

//     function dragstop() {
//         $doc.off('mousemove.drag'); //отключаем свой mousemove.
//     }

// });

// jQuery(function ($) {
//     var $doc = $(document),
//         ratio = $doc.height() / $doc.height(), //отношение окна к общей ширене блока, чтобы тянуть весь блок.
//         mousepos, to;
//     $doc.on('mousedown', '#content', dragstart);

//     function dragstart(e) {
//         e.preventDefault();
//         mousepos = e.screenY;
//         $doc.on('mousemove.drag', drag);
//         $doc.one('mouseup.drag mouseout.drag', dragstop);
//     }

//     function drag(e) {
//         clearTimeout(to);
//         var delta = (e.screenY - mousepos) * ratio;
//         to = setTimeout(function () { // таймаут чтобы события от мыши не перекрывали друг друга, 
//             $doc.scrollTop($doc.scrollTop() + delta);
//             mousepos = e.screenY;
//         }, 1);
//     }

//     function dragstop(e) {
//         $doc.off('mousemove.drag mouseup.drag mouseout.drag');
//     }

// });
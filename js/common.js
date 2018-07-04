$(document).ready(function(){

	// mobile header menu
    $("#sandwich, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
        $("#mobile-menu").toggle(600);
    });

    // change color header
	$(window).scroll(function(){
		if( $(window).scrollTop() > $(window).height() ){
			$('header').addClass('scrollTop');
		}else{
			$('header').removeClass('scrollTop');
		}
	});
	$(window).scroll();


	



    // var clock = $('#clock-hrc').FlipClock({
    // // ... your options here
    // });
    // // Grab the activerent date
    var activerentDate = new Date();

    // Set some date in the past. In this case, it's always been since Jan 1
    var pastDate  = new Date(activerentDate.getFullYear(), 0, 1);

    // Calculate the difference in seconds between the future and activerent date
    var diff1 = activerentDate.getTime() / 1000 - pastDate.getTime() / 1000;

    var diff2 = activerentDate.getTime() / 1000 - pastDate.getTime() / 1000;


    // Instantiate a coutdown FlipClock
    clock = $('#clock-hrc').FlipClock(diff1, {
        clockFace: 'DailyCounter',
        showSeconds: true,
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



	$('img.hover').mouseover(function(){
		let src = $(this).attr('src');
		src = src.replace('.png', '-hover.png');
		$(this).attr('src', src);
	});
	$('img.hover').mouseout(function(){
		let src = $(this).attr('src');
		src = src.replace('-hover.png', '.png');
		$(this).attr('src', src);
	});


    // $("body").on("click","a", function (event) {
    //     event.preventDefault();
    //     var id  = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1200);
    // });


    // jQuery.scrollSpeed(100, 800);

    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });


    // $('.map-item-wrap').click(function(){
    //     $('.map-item-wrap').removeClass('active');
    //     $(this).addClass('active');
    // });
    

    var popupStatus = false;
    // open popup
    $('#open-map-popup').click(function(){
        $('#map-popup').show();
        popupStatus = true;
        if( popupStatus == true ){
            // close popup
            $(document).mouseup(function (e){ 
                var div = $(".popup-wrap");
                if (!div.is(e.target) && div.has(e.target).length === 0) {
                    $('.popup-container').hide();
                    popupStatus = false;
                }
            });
        }
    });

    // close popup
    $('.close-popup').click(function(){
        $('.popup-container').hide();
        popupStatus = false;
    });

});



/*
 * jQuery liLanding v 2.1
 *
 * Copyright 2013, Linnik Yura | LI MASS CODE | http://masscode.ru
 * Free to use
 *
 * Last Update: 19.06.2016
 */
(function ($) {
    var methods = {
        init: function (options) {
            var p = {
                show: function (linkEl, landingItem) {}, 
                hide: function (linkEl, landingItem) {},
                topMargin: 0,
                speedFactor: .5
            };
            if (options) {
                $.extend(p, options);
            }
            return this.each(function () {
                var el = $(this);
                var elPos = el.offset().top;
                var wHalf = $(window).height()/2
                var scrollId = function(){};
                
                //assign events only links with anchors
                $('a[href^=#]',el).on('click',function(){
                    var linkItem = $(this);
                    if(!linkItem.is('.active')){
                        var linkHref = linkItem.attr('href');
                        var linkTarget = $(linkHref);
                        var linkTargetPos = linkTarget.offset().top;
                        var windowPos = $(window).scrollTop();
                        var animDuration = linkTargetPos - windowPos
                        if(animDuration < 0){
                            animDuration = animDuration*-1  
                        }
                        //scroll the page to the desired block
                        if(linkTarget.length){
                            $('html, body').stop(true).animate({scrollTop:(linkTargetPos-parseFloat(p.topMargin))},animDuration*p.speedFactor,function(){
                                $(window).trigger('scroll');
                            });
                        }
                    }
                    return false;
                })
                //stop the animation by scrolling
                var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
                if (document.attachEvent) //if IE (and Opera depending on user setting)
                    document.attachEvent("on"+mousewheelevt, function(e){
                        $('html, body').stop(true);     
                    });
                else if (document.addEventListener) //WC3 browsers
                    document.addEventListener(mousewheelevt, function(e){
                        //e.detail //direction
                        $('html, body').stop(true);
                    }, false)
                //highlight the desired link in the menu by scrolling
                $(window).on('scroll',function(e){
                    clearTimeout(scrollId);
                    var windowPos = $(window).scrollTop();
                    if(windowPos > elPos){
                        el.addClass('landingFix');  
                    }else{
                        el.removeClass('landingFix');   
                    }
                    scrollId = setTimeout(function(){
                        $('.landingItem').each(function(){
                            var landingItem = $(this);
                            var landingItemHeight = landingItem.height();
                            var landingItemTop = landingItem.offset().top - wHalf;
                            var linkHref = landingItem.attr('id');
                            var linkEl = $('a[href="#'+linkHref+'"]',el);
                            var status;

                            if(windowPos > landingItemTop && windowPos < (landingItemTop + landingItemHeight)){
                                if(!linkEl.is('.active')){
                                    linkEl.addClass('active');
                                    if (p.show !== undefined) {
                                        p.show(linkEl, landingItem);
                                    }
                                }
                            }else{
                                if(linkEl.is('.active')){
                                    linkEl.removeClass('active');
                                    if (p.hide !== undefined) {
                                        p.hide(linkEl, landingItem);
                                    }
                                }
                            }
                        });
                    },100);
                })
                $(window).trigger('scroll');
            });
        }
    };
    $.fn.liLanding = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод ' + method + ' в jQuery.liLanding не существует');
        }
    };
})(jQuery);

//Инициализация плагина
$(window).load(function(){
    $('.landingNav').liLanding({
        topMargin:0
    });
})
/*global jQuery:false */
(function ($) {
"use strict";
// NIVO Lightbox

jQuery(document).ready(function($){
    

    $('#gallery a').nivoLightbox({
      effect: 'fadeScale', 
      keyboardNav: true
    });
    $('.play-button a').nivoLightbox({
      beforeHideLightbox: function(){
        $("iframe").remove();
      },
      effect: 'fadeScale', 
      keyboardNav: true
    });



// OWL Carousel

  $(".section-slider").owlCarousel({
    navigation : true,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    autoPlay: true,
    pagination: false,
    transitionStyle : "fadeUp"

    });

  $(".testimonials").owlCarousel({
    navigation : false,
    slideSpeed : 800,
    paginationSpeed : 400,
    singleItem:true,
    autoPlay: true,
    pagination: false,
    transitionStyle : "fade"

    });

  $("#text-rotator").owlCarousel({
    navigation : false,
    slideSpeed : 200,
    paginationSpeed : 400,
    singleItem:true,
    touchDrag: false,
    mouseDrag: false,
    autoPlay: true,
    pagination: false,
    transitionStyle : "fade"
    });

});


// WOW JS

var wow = new WOW(
  {
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });
});


// PAGE PRELOADER

$(window).load(function() {
  $(window).scrollTop(0);
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');

});





// MOBILE MENU

  $('#nav-toggle').click(function () {
     if ($('#header').hasClass('res-nav')) {
            $('#header').removeClass('res-nav');
        } else {
            $('#header').addClass('res-nav');
        }
   });
  $('#nav li a').click(function () {
        if ($('#header').hasClass('res-nav')) {
            $('#header').removeClass('res-nav');
        }
    });


// OFFSET HEADER

  jQuery(document).ready(function(){
      jQuery('#nav')
          .localScroll({
              offset:-68
      });

      jQuery('.home-buttons')
          .localScroll({
              offset:-68
      });
  });


// STYLE SWITCHER TRIGGER

  $('.trigger').click(function () {
    if ($('.style-selector').css('left') == '-160px') {
        $(".style-selector").css("left", "0");

    } else {
        $(".style-selector").css("left", "-160px");
    }

    return false;
});


jQuery(function(){
  var $body = jQuery('body');
  var $inputs = jQuery('input');

  $inputs.on('focus', function(e) {
      $body.addClass('fixfixed');
  });
  $inputs.on('blur', function(e) {
      $body.removeClass('fixfixed');
  });
});

	if (Modernizr.touch) {
	  /* bind events */
	  $(document)
	  .on('focus', 'input', function(e) {
	  $('body').addClass('fixfixed');
	  })
	  .on('blur', 'input', function(e) {
	  $('body').removeClass('fixfixed');
	  });
	}
	
	if (Modernizr.touch) {
            skrollr.init().destroy();
        } else {   
            var s=skrollr.init();  
        }  
		
	$(".os a").tooltip({
            placement: 'bottom'   
        });
        $(".colors li a").tooltip({
            placement: 'bottom'   
        });
		
jQuery(document).ready(function(){

$(function () {
  var $form = $('form.mc-embedded-subscribe-form');
 
  jQuery('button.mc-embedded-subscribe').on('click', function(event) {
    if(event) event.preventDefault();
    register($form);
  });
});


// SUBSCRIBE FORM

function register($form) {
  jQuery.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) {
      var themessage = jQuery('<span class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>Could not connect to server. Please try again later.</span>');
      jQuery('#notification_container').html(themessage);
      setTimeout(function(){
          themessage.addClass('animate');
        }, 300)
    },
    success     : function(data) {
      
      if (data.result != "success") {
        var message = data.msg.substring(4),
          themessage = jQuery('<span class="alert alert-warning"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+message+'</span>');
        jQuery('#notification_container').html(themessage);
        setTimeout(function(){
          themessage.addClass('animate');
        }, 300)
        
      } 
 
      else {
        var message = data.msg,
          themessage = jQuery('<span class="success alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+message+'</span>');
        jQuery('#notification_container').html(themessage);
        setTimeout(function(){
          themessage.addClass('animate');
        }, 300)
      }
    }
  });

}
});

})(jQuery);
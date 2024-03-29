// Page loading animation

if ((".loader").length) {
    // show Preloader until the website ist loaded
    $(window).on('load', function () {
    $(".loader").fadeOut("slow");
    });
}

/* Onpage linkng smooth effect */

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

$('.nav-item').click(function(){
    $('.navbar-toggler').click();
  });

  $('.facebook').click(function(){
      location.href='https://www.facebook.com/pages/category/Barber-Shop/Man-Parlor-Barbershop-329319544535444/';
  });

  $('.instagram').click(function(){
      location.href='https://www.instagram.com/manparlorbarbershop/?hl=en';
  });

// Sticky Header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
    } else {
        $(".top-nav").removeClass("light-header");
    }
});

// Year for copy content
$(function(){
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});


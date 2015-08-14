'use strict';

$(function() {
  $('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();
    $('#content').load(url + ' #content').hide().fadeIn('slow');

  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // $('a[href^="#"]').on('click',function(e) {
  //   e.preventDefault();
  //   var target = this.hash;
  //   var $target = $(target);
  //   $('html, body').stop().animate({
  //       'scrollTop': $target.offset().top
  //   }, 900, 'swing', function () {
  //       window.location.hash = target;
  //   });
  // });

});

'use strict';

$(function() {
  $('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();
    $('#content').load(url + ' #content').hide().fadeIn('fast');
  });
  // when you click on nav a with title show navigation

});
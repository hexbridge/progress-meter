$(document).ready(function() {
  if ($('.anchor').length > 0) {
    $('body').append('<div class="progress-meter"></div>');

    for (var i = 0; i < $('.anchor').length; i++) {
      $('.progress-meter').append('<div class="index section' + i + '"></div>');
    }

    var diff = $('.anchor').eq(0).offset().top;

    $(document).on('scroll', function() {
      for (var i = 0; i < $('.anchor').length; i++) {
        var offset = $('.anchor').eq(i).offset();

        if (offset) {
          var distance = offset.top - diff + 5,
            top = $(document).scrollTop(),
            windowHeight = $(window).height(),
            docHeight = $(document).height();

          if ((distance <= top) || (top + windowHeight == docHeight)) {
            $('.section' + i).addClass('reached');
          }
          else if ($('.section' + i).hasClass('reached')) {
            $('.section' + i).removeClass('reached');
          }
        }
      }
    });
  }
});
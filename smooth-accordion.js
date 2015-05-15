$(function () {

    //Checking the position of panels
    var allPanels = $('.content').hide();
    var mastheadHeight = $('.masthead').height();

    //working accordion code -- needs to be smoother
    $('.accordion > .masthead').click(function (event) {

        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
            .next(allPanels).slideUp(400);
        } else {
          var topPos = $(this).position();
          
          if ($('.active').length && $('.active').index() < $(this).index()) {
            $('body').animate({scrollTop: topPos.top - mastheadHeight}, 600);
          } else { 
            $('body').animate({scrollTop: topPos.top}, 600);
          }
          
          $('.active').removeClass('active')
            .next(allPanels).slideUp(400);
          $(this).addClass('active')
            .next(allPanels).slideDown(400);
        }
    });

});
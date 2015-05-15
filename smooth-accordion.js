$(function () {

    //Checking the position of panels
    var allPanels = $('.content').hide();

    //working accordion code -- needs to be smoother
    $('.accordion > .masthead').click(function (event) {
      var contentHeight = $('.active').next().height();

      if (contentHeight < 400) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
            .next(allPanels).slideUp(400);
        } else {
          var topPos = $(this).position();
          
          if ($('.active').length && $('.active').index() < $(this).index()) {
            $('body').animate({scrollTop: topPos.top - contentHeight}, 600);
          } else { 
            $('body').animate({scrollTop: topPos.top}, 400);
          }
          
          $('.active').removeClass('active')
            .next(allPanels).slideUp(400);
          $(this).addClass('active')
            .next(allPanels).slideDown(400);
        }
      } else if (contentHeight < 800) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
            .next(allPanels).slideUp(700);
        } else {
          var topPos = $(this).position();
          
          if ($('.active').length && $('.active').index() < $(this).index()) {
            $('body').animate({scrollTop: topPos.top - contentHeight}, 1000);
          } else { 
            $('body').animate({scrollTop: topPos.top}, 1000);
          }
          
          $('.active').removeClass('active')
            .next(allPanels).slideUp(800);
          $(this).addClass('active')
            .next(allPanels).slideDown(800);
        }
      } else if (contentHeight < 1200) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
            .next(allPanels).slideUp(1000);
        } else {
          var topPos = $(this).position();
          
          if ($('.active').length && $('.active').index() < $(this).index()) {
            $('body').animate({scrollTop: topPos.top - contentHeight}, 1100);
          } else { 
            $('body').animate({scrollTop: topPos.top}, 1100);
          }
          
          $('.active').removeClass('active')
            .next(allPanels).slideUp(1000);
          $(this).addClass('active')
            .next(allPanels).slideDown(1000);
        }
      } else {
        console.log("Think about putting less content in there, no one wants to read that much anyway");
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
            .next(allPanels).slideUp(1200);
        } else {
          var topPos = $(this).position();
          
          if ($('.active').length && $('.active').index() < $(this).index()) {
            $('body').animate({scrollTop: topPos.top - contentHeight}, 1300);
          } else { 
            $('body').animate({scrollTop: topPos.top}, 1300);
          }
          
          $('.active').removeClass('active')
            .next(allPanels).slideUp(1200);
          $(this).addClass('active')
            .next(allPanels).slideDown(1200);
        }
      }
    });

});
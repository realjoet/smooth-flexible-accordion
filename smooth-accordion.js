$(function () {

    //Checking the position of panels
    var allContentPanels = $('.content')
    var allMastheads = $('.masthead')
    var hideContentPanels = allContentPanels.hide();
    //If you want margin on your mastheads, enter it here just like CSS
    var mastheadMargin = "0";
    //Need to fill these in with negative values of the values you put in for mastheadMargin
    var marginTopFix = "0";
    var marginRightFix = "0";
    var marginBottomFix = "0";
    var marginLeftFix = "0";

    allMastheads.css("margin", mastheadMargin);

    //working accordion code
    $('.accordion > .masthead').click(function (event) {
      var contentHeight = $('.active').next().height();
      var topPos = $(this).position();

      //Adjusts masthead margins
      if ($(this).hasClass('active')) {
        $(this).next().css({
          "position": "relative", 
          "top": marginTopFix, 
          "right": marginRightFix, 
          "bottom": marginBottomFix, 
          "left": marginLeftFix
        }).delay(10);
        $(allMastheads).css("margin", mastheadMargin);
      } else {
        $('.active').next().css({
          "position": "relative", 
          "top": marginTopFix, 
          "right": marginRightFix, 
          "bottom": marginBottomFix, 
          "left": marginLeftFix
        }).delay(10);
        $(allMastheads).css("margin", mastheadMargin);
        $(this).css("margin", "0");
        $(this).next().css("margin", mastheadMargin);
        if ($(this).next().css("top") == marginTopFix) {
          $(this).next().css("top", "0");
        }
      }

      //Creates content-responsive accordion
      if (contentHeight < 400) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
            .next(allContentPanels).slideUp(400);
          $('body').animate({scrollTop: topPos.top}, 400);
        } else {
          if ($('.active').length && $('.active').index() < $(this).index()) {
            $('body').animate({scrollTop: topPos.top - contentHeight}, 600);
          } else { 
            $('body').animate({scrollTop: topPos.top}, 400);
          }
          
          $('.active').removeClass('active')
            .next(allContentPanels).slideUp(400);
          $(this).addClass('active')
            .next(allContentPanels).slideDown(400);
        }
      } else if (contentHeight < 800) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
            .next(allContentPanels).slideUp(700);
          $('body').animate({scrollTop: topPos.top}, 400);
        } else {
          var topPos = $(this).position();
          
          if ($('.active').length && $('.active').index() < $(this).index()) {
            $('body').animate({scrollTop: topPos.top - contentHeight}, 1000);
          } else { 
            $('body').animate({scrollTop: topPos.top}, 1000);
          }
          
          $('.active').removeClass('active')
            .next(allContentPanels).slideUp(800);
          $(this).addClass('active')
            .next(allContentPanels).slideDown(800);
        }
      } else if (contentHeight < 1200) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
            .next(allContentPanels).slideUp(1000);
          $('body').animate({scrollTop: topPos.top}, 400);
        } else {
          var topPos = $(this).position();
          
          if ($('.active').length && $('.active').index() < $(this).index()) {
            $('body').animate({scrollTop: topPos.top - contentHeight}, 1100);
          } else { 
            $('body').animate({scrollTop: topPos.top}, 1100);
          }
          
          $('.active').removeClass('active')
            .next(allContentPanels).slideUp(1000);
          $(this).addClass('active')
            .next(allContentPanels).slideDown(1000);
        }
      } else {
        console.log("Think about putting less content in there, no one wants to read that much anyway");
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
            .next(allContentPanels).slideUp(1200);
          $('body').animate({scrollTop: topPos.top}, 400);
        } else {
          var topPos = $(this).position();
          
          if ($('.active').length && $('.active').index() < $(this).index()) {
            $('body').animate({scrollTop: topPos.top - contentHeight}, 1300);
          } else { 
            $('body').animate({scrollTop: topPos.top}, 1300);
          }
          
          $('.active').removeClass('active')
            .next(allContentPanels).slideUp(1200);
          $(this).addClass('active')
            .next(allContentPanels).slideDown(1200);
        }
      }
    });

});
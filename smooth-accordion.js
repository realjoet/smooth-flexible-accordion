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
    $('.accordion > .masthead').click(function() {
      var el = $(this);
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

      //Accordion function
      function accordionFunc(el, animationTime, animationTime2) {
        if (el.hasClass('active')) {
          el.removeClass('active')
            .next(allContentPanels).slideUp(animationTime);
          $('body').animate({scrollTop: topPos.top}, animationTime);
        } else {
          if ($('.active').length && $('.active').index() < el.index()) {
            $('body').animate({scrollTop: topPos.top - contentHeight}, animationTime2);
          } else { 
            $('body').animate({scrollTop: topPos.top}, animationTime2);
          }
          
          $('.active').removeClass('active')
            .next(allContentPanels).slideUp(animationTime);
          el.addClass('active')
            .next(allContentPanels).slideDown(animationTime);
        }
      }

      //Creates content-responsive accordion
      if (contentHeight < 400) {
        accordionFunc(el, 400, 600);
      } else if (contentHeight < 800) {
        accordionFunc(el, 900, 1000);
      } else if (contentHeight < 1200) {
        accordionFunc(el, 1000, 1100);
      } else {
        console.log("Think about putting less content in there, no one wants to read that much anyway");
        accordionFunc(el, 1200, 1300);
      }
    });

});
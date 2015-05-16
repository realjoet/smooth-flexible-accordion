$(function () {
  //Checking the position of panels
  var allContentPanels = $('.content');
  var allMastheads = $('.masthead');
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
    var activeEl = $('.active');
    var contentHeight = $('.active').next().height();
    var topPos = $(this).position();

    function marginFix(el) {
      $(el).next().css({
        "position": "relative", 
        "top": marginTopFix, 
        "right": marginRightFix, 
        "bottom": marginBottomFix, 
        "left": marginLeftFix
      }).delay(10);
    }

    //Accordion function
    function accordionFunc(el, animationTime, animationTime2) {
      if (el.hasClass('active')) {
        el.removeClass('active')
          .next(allContentPanels).slideUp(animationTime);
        $('body').animate({scrollTop: topPos.top}, animationTime);
      } else {
        if (activeEl.length && activeEl.index() < el.index()) {
          $('body').animate({scrollTop: topPos.top - contentHeight}, animationTime2);
        } else { 
          $('body').animate({scrollTop: topPos.top}, animationTime2);
        }
        
        activeEl.removeClass('active')
          .next(allContentPanels).slideUp(animationTime);
        el.addClass('active')
          .next(allContentPanels).slideDown(animationTime);
      }
    }

    //Adjusts masthead margins
    if (el.hasClass('active')) {
      marginFix(el);
      $(allMastheads).css("margin", mastheadMargin);
    } else {
      marginFix(activeEl);
      $(allMastheads).css("margin", mastheadMargin);
      el.css("margin", "0");
      el.next().css("margin", mastheadMargin);
      if (el.next().css("top") == marginTopFix) {
        el.next().css("top", "0");
      }
    }

    //Creates content-responsive accordion
    if (contentHeight < 400) {
      accordionFunc(el, 600, 800);
    } else if (contentHeight < 800) {
      accordionFunc(el, 800, 1000);
    } else if (contentHeight < 1200) {
      accordionFunc(el, 1000, 1200);
    } else {
      console.log("Think about putting less content in there, no one wants to read that much anyway");
      accordionFunc(el, 1200, 1400);
    }
  });
});
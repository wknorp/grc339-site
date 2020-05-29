$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
  
    $(".scrolltitle").css({
      transform: "translate(0px, " + wScroll / 1.5 + "%)"
    });
  
    $(".transparent").css({
      transform: "translate(0px, -" + wScroll / 3 + "%)"
    });
  });

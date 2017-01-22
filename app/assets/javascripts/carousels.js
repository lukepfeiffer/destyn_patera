$(document).ready(function() {
  // normal view
  $('.scroller').slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1
  });

  // mobile view
  $('.mobile-scroller').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: '<div class="class-to-style"><span class="fa fa-arrow-circle-right"></span><span class="sr-only">Next</span></div>',
    prevArrow: '<div class="class-to-style"><span class="fa fa-arrow-circle-left"></span><span class="sr-only">Next</span></div>'
  });
});

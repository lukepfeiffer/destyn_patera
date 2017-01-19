$(document).ready(function() {

  // Lock scroll on loading screen

  var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  function scrollPreventDefault(event){
    event = event || window.event;
    if (event.preventDefault)
      event.preventDefault();
    event.returnValue = false;
  }

  function preventDefaultForScrollKeys(event){
    if(keys[event.keyCode]) {
      scrollPreventDefault(event);
      return false;
    }
  }

  function disableScroll(){
    if (window.addEventListener){
        window.addEventListener('DOMMouseScroll', scrollPreventDefault, false);
    }
    window.onwheel = scrollPreventDefault;
    window.onmousewheel = document.onmousewheel = scrollPreventDefault;
    window.ontouchmove  = scrollPreventDefault;
    document.onkeydown  = preventDefaultForScrollKeys;
  }

  function enableScroll() {
    if (window.removeEventListener){
        window.removeEventListener('DOMMouseScroll', scrollPreventDefault, false);
    };
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

  disableScroll();

  setTimeout( function(){
    $('#special-nav').fadeIn(2000);
    $('#special-nav img').fadeIn(3000);
    $('.loading-screen').fadeOut(1000, function(){
      $(this).remove();
    });
    $('body').css({'overflow' : 'visible'});
    enableScroll();
  }, 3000);


  // Dropdown menu on mobile

  $('.navigation').on('click', '.fa-bars', function(){
    $('.items').show(100);
    $('.fa-bars').hide();
  });

  // Hide dropdown after clicking link

  $('.dropdown').on('click', 'li', function(){
    $('.items').hide();
    $('.fa-bars').show();
  });

  // Clicking outside of dropdown removes dropdown

  $('body').on('click', '.body-wrapper', function(event) {
    if(!$(event.target).is('.items, .fa-bars')){
      if($('.items').is(":visible")) {
        $('.items').hide();
        $('.fa-bars').show();
      }
    };
  });

  // Scroll to contact section

  $('.right-navigation-wrapper').on('click', '.contact', function(event){
    $('body').animate({
      'scrollTop': $('#contact').offset().top
    }, 700);
  });

  // Scroll to our work section

  $('.mobile-link').on('click', 'button', function(event){
    $('body').animate({
      'scrollTop': $('#recent_work').offset().top
    }, 700);
  });

  // Scroll to top of page

  $('.right-navigation-wrapper').on('click', '.home', function(event){
    $('body').animate({
      'scrollTop': $('#special-nav').offset().top
    }, 700);
  });


  // Delete categories for admin

  $('#photos').on('click', '.delete', function(event){
    event.preventDefault;
    var deleteButton = $(this)
    if (confirm('Are you sure? Deleting this category will delete all images associated with this category as well.')) {
      $.ajax({type: "delete",
        url: deleteButton.data('url'),
        success: function(){
          deleteButton.closest('tr').remove()
        }
      })
    };
  });

  // Parallax contact section

  $(window).scroll(function(){
    var topOfScreen = $(window).scrollTop() - 290;
    var mobileTopOfScreen = $(window).scrollTop() - 4470;
    var divam = 6;
    var mobileDivam = 5
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.footer-top').css({
        "background-position": "-450px -" + mobileTopOfScreen/divam + "px"
      });
    }
    else{
      $('.footer-top').css({
        "background-position": "-200px -" + topOfScreen/divam + "px"
      });
    }
  });

  // Parallax about

  $(document).scroll(function(e){
    var target = $('.container');
    var windowHeight = $(window).innerHeight();
    var windowWidth = $(window).innerWidth();
    var topOfScreen = $(window).scrollTop() - 590;
    var scrollPercent = window.scrollY/windowHeight;

    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      if( window.scrollY < 1300 ){
        target.css('opacity', scrollPercent*10);
      } else if( window.scrollY >= 1300 ) {
        target.css('opacity', 1.15 - scrollPercent*1.001);
      }
    } else if( /iPad/i.test(navigator.userAgent) ) {
      if( window.scrollY < 1300 ){
        target.css('opacity', scrollPercent*10);
      } else if( window.scrollY >= 1300 ) {
        target.css('opacity', 1.2 - (window.scrollY*1.3/windowHeight));
      }
    } else {
      if( window.scrollY < 600 ){
        target.css('opacity', scrollPercent*4.8);
        target.css({"position": "relative"});
        target.css({"right": topOfScreen + "px"});
      } else if( window.scrollY >= 600 && window.scrollY < 650 ){
        target.css('opacity', 1);
        target.css({"position": "relative"});
        target.css({"left": target.offset()/2});
      } else if( window.scrollY >= 650 && window.scrollY < 950) {
        target.css('opacity', 1.4 - (window.scrollY*1.8/windowHeight));
        target.css({"left": topOfScreen + "px"});
      } else {
        target.css('opacity', 1);
      }
    }
  });
});

$(document).ready(function() {
  // Loading Screen
  var is_safari = navigator.userAgent.indexOf("Safari") > -1;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || window.screen.width < 1400) ) {
    $('#special-nav').fadeIn(1000);
    $('#special-nav img').fadeIn(1000);
    $('.loading-screen').fadeOut(1000, function(){
      $(this).remove();
    });
  } else if( is_safari ){
    $('#special-nav').fadeIn(1000);
    $('#special-nav img').fadeIn(1000);
    $('.loading-screen').fadeOut(1000, function(){
      $(this).remove();
    });
  } else {
    setTimeout( function(){
      $('#special-nav').fadeIn(2000);
      $('#special-nav img').fadeIn(2000);
      $('.loading-screen').fadeOut(1000, function(){
        $(this).remove();
      });
    }, 100);

    window.setInterval( function() {
      if( $(".loading-screen").css("display") === "block") {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
      }
    }, 250);
  }

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
    var topOfScreen = $(window).scrollTop() - 750 ;
    var mobileTopOfScreen = $(window).scrollTop() - 4470;
    var divam = 4;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    } else{
      $('.footer-top').css({
        "background-position": "-300px -" + topOfScreen/divam + "px"
      });
    }
  });

  // Header image fade in

  $(window).on('scroll', function(){
    var scrollDistance = $(this).scrollTop();
    if(!($(window).width() < 1201)) {
      if(scrollDistance < 30){
        $('.nav-styles').css('display', 'none');
        $('.background-image-1').css('display', 'block');
      } else if(scrollDistance >= 30 && scrollDistance < 60 ){
        $('.nav-styles').css('display', 'none');
        $('.background-image-2').css('display', 'block');
      } else if(scrollDistance >= 60 && scrollDistance < 90 ){
        $('.nav-styles').css('display', 'none');
        $('.background-image-3').css('display', 'block');
      } else if(scrollDistance >= 90 && scrollDistance < 120 ){
        $('.nav-styles').css('display', 'none');
        $('.background-image-4').css('display', 'block');
      } else if(scrollDistance >= 120 && scrollDistance < 150 ){
        $('.nav-styles').css('display', 'none');
        $('.background-image-5').css('display', 'block');
      } else if(scrollDistance >= 150 && scrollDistance < 180 ){
        $('.nav-styles').css('display', 'none');
        $('.background-image-6').css('display', 'block');
      } else if(scrollDistance >= 180 && scrollDistance < 210 ){
        $('.nav-styles').css('display', 'none');
        $('.background-image-7').css('display', 'block');
      } else if(scrollDistance >= 240){
        $('.nav-styles').css('display', 'none');
        $('.background-image-8').css('display', 'block');
      }
    }
  });

  // Parallax about
  $(document).scroll(function(e){
    var target = $('.container');
    var targetHeader = $('.container .header');
    var targetSub = $('.container .subheader');
    var windowHeight = $(window).innerHeight();
    var windowWidth = $(window).innerWidth();
    var topOfScreen = $(window).scrollTop() - 590;
    var scrollPercent = window.scrollY/windowHeight;

    if ( !($(window).width() < 1601) ) {
      if( window.scrollY < 600 ){
        target.css('opacity', scrollPercent*5.2);
        targetHeader.css('opacity', scrollPercent*4.8);
        targetSub.css('opacity', scrollPercent*4.8);
        target.css({"position": "relative"});
        target.css({"right": topOfScreen + "px"});
      } else if( window.scrollY >= 600 && window.scrollY < 650 ){
        target.css('opacity', 1);
        target.css({"position": "relative"});
        target.css({"left": target.offset()/2});
      } else {
        target.css('opacity', 1);
      }
    }
  });
});

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
  }, 4000);

  // All devices except iPhone and iPods

  $('.navigation').on('click', '.fa-bars', function(){
    $('.items').show(100);
    $('.fa-bars').hide();
  });

  $('.dropdown').on('click', 'li', function(){
    $('.items').hide();
    $('.fa-bars').show();
  });

  $('body').on('click', '.body-wrapper', function(event) {
    if(!$(event.target).is('.items, .fa-bars')){
      if($('.items').is(":visible")) {
        $('.items').hide();
        $('.fa-bars').show();
      }
    };
  });

  $('.right-navigation-wrapper').on('click', '.contact', function(event){
    $('body').animate({
      'scrollTop': $('#contact').offset().top
    }, 700);
  });

  $('.mobile-link').on('click', 'button', function(event){
    $('body').animate({
      'scrollTop': $('#recent_work').offset().top
    }, 700);
  });

  $('.right-navigation-wrapper').on('click', '.home', function(event){
    $('body').animate({
      'scrollTop': $('#special-nav').offset().top
    }, 700);
  });


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
});

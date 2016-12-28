$(document).ready(function() {

  $('#main').on('click', '.overlay', function(event) {
    if(!$(event.target).is('.modal-container')){
      if($('.modal-container').is(":visible")) {
        $('.modal-container').remove();
      }
    };
  });

  // photos modal

  $('#photos').on('click', '.modal-trigger', function(){
    var category = $(this);

    $.ajax({type: 'get',
      url: category.data('url'),
      success: function(response){
        $('#main').append(response);
      }
    });
  });

  // videos modal

  $('.row').on('click', '.thumb-nail', function(){
    var video = $(this);
    jQuery.fn.center = function () {
      this.css("margin-top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 7) + $(window).scrollTop()) + "px");
      return this;
    }

    $.ajax({type: 'get',
      url: video.data('video-url'),
      success: function(response){
        $('#main').append(response);
        $('.modal-container').center();
      }
    });
  });

});

$(document).ready(function() {

  $('#main').on('click', '.overlay', function(event) {
    if(!$(event.target).is('.modal-container')){
      if($('.modal-container').is(":visible")) {
        $('.modal-container').hide();
      }
    };
  });

  $('#photos').on('click', '.modal-trigger', function(){
    var category = $(this);
    jQuery.fn.center = function () {
      this.css("position","fixed");
      this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 3) + $(window).scrollTop()) + "px");
      this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2.3) + $(window).scrollLeft()) + "px");
      return this;
    }

    $.ajax({type: 'get',
      url: category.data('url'),
      success: function(response){
        $('#main').append(response);
        $('.modal-container').center();
      }
    });
  });
});

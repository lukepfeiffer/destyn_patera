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
      this.css("top", $(window).height()/ 3 + "px");
      this.css("left", Math.max(0, ($(window).width() / 2.3) ) + "px");
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

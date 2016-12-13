$(document).ready(function() {

  $('.video-container').on('click', '.thumb-nail', function(){
    var thumbNail = $(this)
    var videoId = thumbNail.data('id')
    var videoIframe = $('#' + videoId).children('iframe')
    $('#' + videoId).show();
  });

  $(document).on('click', '#main', function(event) {
    if(!$(event.target).is('.thumb-nail, img, iframe')){
      if($('iframe').is(":visible")) {
        $('iframe').hide();
      }
    };
  });

});

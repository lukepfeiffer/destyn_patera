$(document).ready(function() {
  $('.video-container').on('click', '.thumb-nail', function(){
    var thumbNail = $(this)
    var videoId = thumbNail.data('id')
    var videoIframe = $('#' + videoId).children('iframe')
    debugger
    $('#' + videoId).show();
  });
});

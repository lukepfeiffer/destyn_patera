$(document).ready(function() {
  $('.video-container').on('click', '.thumb-nail', function(){
    var thumbNail = $(this)
    var videoSource = thumbNail.data('src')
    debugger
    $('.video-container').append("<iframe src=" + videoSource + " width='640' height='274' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")
  });
});

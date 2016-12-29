$(document).ready(function() {

  $('#main').on('click', '.next', function(){
    var allImages = $('.photos img');
    var currentImage = $('.photos img:visible').eq(0);
    var currentImageIndex = allImages.index(currentImage);
    var nextImageIndex = currentImageIndex + 1;
    if (allImages.eq(nextImageIndex).length == 0) {
      nextImageIndex = 0;
    }
    var nextImage = allImages.eq(nextImageIndex);
    allImages.hide();
    nextImage.show();
  });

  $('#main').on('click', '.previous', function(){
    var allImages = $('.photos img');
    var currentImage = $('.photos img:visible').eq(0);
    var currentImageIndex = allImages.index(currentImage);
    var prevImageIndex = currentImageIndex - 1;
    if (allImages.eq(prevImageIndex).length == 0) {
      prevImageIndex = allImages.length - 1;
    }
    var prevImage = allImages.eq(prevImageIndex);
    allImages.hide();
    prevImage.show();
  });

});

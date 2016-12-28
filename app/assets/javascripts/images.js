$(document).ready(function() {
  $('#images').on('submit', '#new', function(event){
    event.preventDefault();
    var form = $(this)

    $.ajax({type: "post",
      url: form.attr("action"),
      data: form.serialize(),
      success: function(response){
        $('.image-container').prepend(response)
      }
    })
  });

  $('#main').on('click', '.next', function(){
    var allImages = $('.photos').children('img')
    var currentImageIndex = allImages.index('.photos img:visible')
    var currentImage = allImages.eq(currentImageIndex)
    var nextImageIndex = currentImageIndex + 1
    var nextImage = allImages.eq(nextImageIndex)
    if(!nextImage){
      nextImage = allImages.eq(0)
    }
    currentImage.hide()
    nextImage.show()
  });

  $('#main').on('click', '.previous', function(){
    var allImages = $('.photos').children('img')
    if(allImages.indexOf('img:visible') == 0){
      allImages.last().show()
      allImages.first('img:visible').hide()
    } else{
      allImages.first('img:visible').prev().show()
      allImages.first('img:visible').hide()
    }
  });

});

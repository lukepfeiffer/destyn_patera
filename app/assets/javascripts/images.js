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

  $('#main').on('click', '.previous', function(){
    var visibleImage = $('.photos').children('img:visible')
    var hiddenImages = $('.photos').children('img:hidden')
    visibleImage.hide();
  });

  $('#main').on('click', '.next', function(){
    var image = $('.photos').children('img:visible')
  });

});

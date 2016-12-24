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

});

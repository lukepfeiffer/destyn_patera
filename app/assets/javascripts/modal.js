$(document).ready(function() {
  $('#photos').on('click', '.modal-trigger', function(){
    var category = $(this);

    $.ajax({type: 'get',
      url: category.data('url'),
      success: function(response){
        $('#main').append(response);
      }
    });
  });
});

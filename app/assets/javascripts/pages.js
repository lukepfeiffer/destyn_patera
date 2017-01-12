$(document).ready(function() {
  $('.navigation').on('click', '.fa-bars', function(){
    $('.items').show(100);
    $('.fa-bars').hide();
  });

  $('.dropdown').on('click', 'li', function(){
    $('.items').hide();
    $('.fa-bars').show();
  });

  $('body').on('click', '.body-wrapper', function(event) {
    if(!$(event.target).is('.items, .fa-bars')){
      if($('.items').is(":visible")) {
        $('.items').hide();
        $('.fa-bars').show();
      }
    };
  });

  $('.right-navigation-wrapper').on('click', '.contact', function(event){
    $('body').animate({
      'scrollTop': $('#contact').offset().top
    }, 700);
  });

  $('.right-navigation-wrapper').on('click', '.home', function(event){
    $('body').animate({
      'scrollTop': $('#special-nav').offset().top
    }, 700);
  });


  $('#photos').on('click', '.delete', function(event){
    event.preventDefault;
    var deleteButton = $(this)
    if (confirm('Are you sure? Deleting this category will delete all images associated with this category as well.')) {
      $.ajax({type: "delete",
        url: deleteButton.data('url'),
        success: function(){
          deleteButton.closest('tr').remove()
        }
      })
    };
  });
});

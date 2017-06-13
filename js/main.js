$(document).ready(function () {
    
    // Isotope initialization
        var $item = $('.item').isotope({
          itemSelector: '.item-box',
        });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'a.btnf', function() {
      var filterValue = $(this).attr('data-filter');
      $item.isotope({ filter: filterValue });

    });
    
      $('.counterup').counterUp({
                delay: 10,
                time: 1000
            });
    
});

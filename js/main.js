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
    
    $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                    loop: true
                }
            }
        });
});

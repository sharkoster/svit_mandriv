/**
 * Created by sharkoster on 22.12.2016.
 */



$(document).ready(function() {

    var owl = $("#owl-carousel");

    owl.owlCarousel({
    
    navigation : true, // показывать кнопки next и prev
    slideSpeed : 600,
    paginationSpeed : 800,
        items : 1, //10 items above 1000px browser width
        itemsDesktop : [1000,1], // items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })

});


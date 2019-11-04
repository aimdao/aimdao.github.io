$(document).ready(function () {
    $('.home4-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});


/* Modal (модальное окно bootstrap). */
$(function(){
    $('.homeH-phone__link').click(function () {
        $('#myModal').modal();
    });
});





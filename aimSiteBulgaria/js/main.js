//================================================================
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

//================================================================

/* Modal (модальное окно bootstrap). */
$(function () {
    $('.homeH-phone__link').click(function () {
        $('#modalForm').modal();
    });
});

//================================================================

/* Modal - модальное окно bootstrap (всплывающее окно с инфой об успешной отправке
данных из формы в нижней части страницы). */
$(function () {
    $('.home5-form__userOrder').click(function () {
        $('#modalFormSend').modal();
    });
});

//================================================================

/* По клику на "стрелочку", плавная прокрутка экрана вниз. */
$(document).ready(function () {
    var margin = 10; // переменная для контроля докрутки
    $('.homeH-arrowButton').click(function () { // тут пишите условия, для всех ссылок или для конкретных
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + margin + 'px' // .top+margin - ставьте минус, если хотите увеличить отступ
        }, {
            duration: 1500, // Тут можно задать скорость прокрутки.
            easing: 'swing'
        });
        return false;
    });
});





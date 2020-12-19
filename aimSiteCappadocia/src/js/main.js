$(function () {

    // Слайдер fairy-tail__slider.
    $('.fairy-tail__slider').slick({
        // Подключаем две стрелки для листания слайдера.
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="/build/img/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="/build/img/arrow-next.svg" alt=""></button>',
        // Автоматическое перелистывание слайдера (каждые 3 секунды): true - вкл; false - откл.
        autoplay: false,
        autoplaySpeed: 3000,
        // Слайды меняются с помощью анимации, а не перелистываются.
        fade: true,

        // Для адаптивной верстки (аналог медиа-запросов).
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false // Отключаем стрелки для пролистывания.
                }
            }
        ]

    });

    // Слайдер our-trip__slider.
    $('.our-trip__slider').slick({
        // Подключаем две стрелки для листания слайдера.
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="/build/img/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="/build/img/arrow-next.svg" alt=""></button>',
        // Автоматическое перелистывание слайдера (каждые 3 секунды): true - вкл; false - откл.
        autoplay: false,
        autoplaySpeed: 3000,
        // Слайды меняются с помощью анимации, а не перелистываются.
        fade: true,

        // Для адаптивной верстки (аналог медиа-запросов).
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false // Отключаем стрелки для пролистывания.
                }
            }
        ]

    });

    // Плавный скролл после нажатия на якорную ссылку (при нажатии на ссылку "a", имеющую своим родителем класс ".menu" или класс ".our-trip__body").
    $(".menu, .our-trip__body").on("click", "a", function (event) {
        // Отменяем стандартную обработку нажатия по ссылке (стандартная обработка  - это переход на другую страницу).
        event.preventDefault();
        // Забираем айдишник блока с атрибута href.
        var id = $(this).attr('href'),
            // Определим высоту от начала страницы до блока на который ссылается якорь.
            top = $(id).offset().top;
        // Анимируем переход на расстояние - top за 1500 мс.
        $('body,html').animate({scrollTop: top}, 1500);
    });

});




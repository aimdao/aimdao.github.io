$(function () {
    $('.header__slider').slick({ // Подключение первого слайдера slick в header (https://kenwheeler.github.io/slick).
        infinite: true, // Бесконечное листание слайдов.
        fade: true, // Плавное переключение слайдов.
        // Стрелки перелкючения слайдера header__slider (подключены вместо стандартных кнопок slick: prevArrow и nextArrow).
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">', // Левая стрелка для слайдера.
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">', // Правая стрелка для слайдера.
        asNavFor: '.slider-dotsHead', // Связывание со слайдером slider-dotsHead.
    });

    $('.slider-dotsHead').slick({ // Подключение второго слайдера slick в header.
        slidesToShow: 4, // Отображать сразу 4 слайда.
        slidesToScroll: 4, // Прокручивать по 4 слайда за раз.
        asNavFor: '.header__slider', // Связывание со слайдером header__slider.
        responsive: [ // Адаптивность.
            {
                breakpoint: 961, // breakpoint сработает на ширине 960px и ниже.
                settings: 'unslick'
            },
        ]
    });

    // Слайдер: карта мира с пляжами (отмечены зелеными точками) и данными о пляжах под картой.
    $('.slider-map').slick({
        slidesToShow: 8, // Отображать сразу 8 слайдов.
        slidesToScroll: 1, //Прокручивать по 1 слайду за раз.
        arrows: false, // Отключение стрелок для листания слайдов.
        asNavFor: '.surf-slider', // Связывание со слайдером surf-slider.
        focusOnSelect: true, // Установка фокуса на выделенный слайд.
        responsive: [ // Адаптивность.
            {
                breakpoint: 1102, // breakpoint сработает на ширине 1101px и ниже.
                settings: {
                    slidesToShow: 3, // Отображать сразу 3 слайда.
                }
            },
            {
                breakpoint: 900, // breakpoint сработает на ширине 899px и ниже.
                settings: {
                    slidesToShow: 2, // Отображать сразу 2 слайда.
                    centerMode: true, // При true, будут отображаться края слайдов, находящихся за дисплеем (чтобы показать юзеру, что есть еще другие слайды).
                }
            },
            {
                breakpoint: 720, // breakpoint сработает на ширине 719px и ниже.
                settings: {
                    slidesToShow: 1, // Отображать только 1 слайд.
                    centerMode: true, // При true, будут отображаться края слайдов, находящихся за дисплеем (чтобы показать юзеру, что есть еще другие слайды).
                }
            },
        ]
    });

    // Слайдер под данными о пляжах: 8 слайдов фото пляжей, отмеченных на карте мира.
    $('.surf-slider').slick({
        slidesToShow: 4, // Отображать сразу 4 слайда.
        slidesToScroll: 1, //Прокручивать по 1 слайду за раз.
        // Стрелки перелкючения слайдера surf-slider (подключены вместо стандартных кнопок slick: prevArrow и nextArrow).
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">', // Левая стрелка для слайдера.
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">', // Правая стрелка для слайдера.
        asNavFor: '.slider-map', // Связывание со слайдером slider-map.
        responsive: [ // Адаптивность.
            {
                breakpoint: 1210, // breakpoint сработает на ширине 1209px и ниже.
                settings: {
                    slidesToShow: 3, // Отображать сразу 3 слайда.
                }
            },
            {
                breakpoint: 900, // breakpoint сработает на ширине 899px и ниже.
                settings: {
                    slidesToShow: 2, // Отображать сразу 2 слайда.
                }
            },
            {
                breakpoint: 720, // breakpoint сработает на ширине 719px и ниже.
                settings: {
                    slidesToShow: 1, // Отображать только 1 слайд.
                    centerMode: true, // При true, будут отображаться края слайдов, находящихся за дисплеем (чтобы показать юзеру, что есть еще другие слайды).
                }
            },
            {
                breakpoint: 426, // breakpoint сработает на ширине 425px и ниже.
                settings: {
                    slidesToShow: 1, // Отображать только 1 слайд.
                    centerMode: false, // При false, не будут отображаться края слайдов, находящихся за дисплеем (чтобы не показать юзеру, что есть еще другие слайды).
                }
            },
        ]
    });

    /* Два независемых слайдера, управляемых одним кодом js:
    - сдайдер: информация о перелете к 8-ми пляжам.
    - слайдер: магазин продажи досок для серфинга. */
    $('.holder__slider, .shop__slider').slick({
        infinite: true, // Бесконечное листание слайдов.
        fade: true, // Плавное переключение слайдов.
        // Стрелки перелкючения слайдера holder__slider (подключены вместо стандартных кнопок slick: prevArrow и nextArrow).
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">', // Левая стрелка для слайдера.
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">', // Правая стрелка для слайдера.
    });

    /* START: для секции sleep для полей input number (+ и - для выбора кол-ва ночей и кол-ва гостей).
    Тут мы с помощью insertAfter добавляем html элементы в DOM (в файл index.html). */
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    // END: для секции sleep для полей input number (+ и - для выбора кол-ва ночей и кол-ва гостей).

    /* При выборе кол-ва ночей и кол-ва гостей на сайте, сумма должна пересчитываться автоматически.
    Изменение кол-ва ночей или кол-ва гостей - это по сути клик на класс quantity-button. */
    $('.quantity-button').on('click', function () {
        // Расчет стоимости гостинницы с учетом кол-ва ночей и кол-ва гостей (1 человек уже включен в стоимость номера, поэтому вычитаем его при расчете).
        let sum = $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() - 1) * $('.sum').data('guests'); // Кол-во ночей (5) * цена за ночь (55) + кол-во гостей (4 - 1) * цена за гостя (25).
        $('.sum').html('$' + sum);
    });

    // Расчет стоимости гостинницы с учетом кол-ва ночей и кол-ва гостей (1 человек уже включен в стоимость номера, поэтому вычитаем его при расчете).
    let sum = $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() - 1) * $('.sum').data('guests'); // Кол-во ночей (5) * цена за ночь (55) + кол-во гостей (4 - 1) * цена за гостя (25).
    $('.sum').html('$' + sum);

    /* Кружок изначально с плюсом внутри: при нажатии на кружок, плюс меняется на минус,
    т.е. при клике, к классу surfboard-box__circle добавляется класс active.
    При повторном клике, класс active изчезает и т.д. */
    $('.surfboard-box__circle').on('click', function () {
        $(this).toggleClass('active')
    });

    // Управление меню при нажатии на кнопку меню (кнопка появляется при адаптивности).
    $('.menu-btn').on('click', function () {
       $('.menu').toggleClass('active'); // Добавляем/убираем класс .active для меню.
    });

    // Инициализируем (активируем) библиотеку анимации WOW.js (анимация элементов происходит по мере прокрутки страницы). Не обязательно оборачивать вызов в $(document).ready(), т.к. у нас нет зависимости от jQuery.
    new WOW().init();
});
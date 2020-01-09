'use strict';

$(function () { // Эта строка говорит, что сначало должен загрузится html-код (DOM элементов), и только потом js-код.

    // Обращение к классам slider__inner и news__slider-inner в jQuery через библиотеку slick.
    $('.slider__inner, .news__slider-inner').slick({
        // Кастомизация кнопки nextArrow.
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        // Кастомизация кнопки prevArrow.
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false, // Отключаем бесконечное (зацикленное) листание слайда.
    });

    // Изменение дефолтного select с помощью jQuery плагина для стилизации селектов, чекбоксов, радиокнопок, файловых и числовых полей.
    $('select').styler();

    /* Открытие-закрытие адаптивного sendvich-menu: при клике на .header__btn-menu,
    элемент .menu ul будет плавно выпадать и плавно изчезать. */
    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    });

});



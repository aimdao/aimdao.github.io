// Slick (слайдер-карусель, source: https://kenwheeler.github.io/slick/).
// Данный модуль подключен через import в файле main.js.
$(function () {
    // Передаем в слайдер класс-родитель restSlider-two, дети которого являются слайдами.
    $(".restSlider-two").slick({
        // Бесконечное листание слайдов.
        infinite: true,
        // Сколько слайдов видно одновременно.
        slidesToShow: 3,
        // Сколько слайдов прокручивается за раз.
        slidesToScroll: 1,
        // Стрелки или точки для листания.
        arrows: false,
        dots: true,
        // Авто-листание слайдов.
        autoplay: true,
        // Интервал через который авто-листаюстя слайды.
        autoplaySpeed: 7000,
        // Скорость с которой листаюстя слайды.
        speed: 2000,
        // Fade - вместо листания, слайды изчезают и появляются друг за другом.
        fade: false,
        cssEase: "linear",
        // Responsive отвечает за адаптацию к разным разрешениям экрана.
        responsive: [
            {
                // Если разрешение дисплея (ширина) 1024 и ниже, параметры слайдера изменятся.
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                },
            },
            {
                // Если разрешение дисплея (ширина) 600 и ниже, параметры слайдера изменятся.
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                },
            },
            {
                // Если разрешение дисплея (ширина) 480 и ниже, параметры слайдера изменятся.
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });
});

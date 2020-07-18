window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //слайдер
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/arrow_right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});
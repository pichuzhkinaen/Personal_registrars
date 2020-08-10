import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
import 'jscrollpane';
import './inputmask.js';
import './_modal-call-to-me';
import './_search-city';
import './_drop-down-list-info';
import './_product-add';

import '../css/bootstrap-reboot.min.css';
import '../css/bootstrap-grid.min.css';
import "../fonts/Bebas_neue/bebas_neue.css";
import "../fonts/Montserrat/montserrat.css";
import '../css/jquery.jscrollpane.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../css/style.css';


document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //слайдер
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    centerMode: true,
                    variableWidth: true,
                }
            }
        ]
    });

    
    //переключение между описанием и отзывами
    let btnDescr = document.getElementById('btn-descr'),
        btnRew = document.getElementById('btn-reviews'),
        textDescr = document.querySelector('.descr'),
        textRew = document.querySelector('.reviews');

    btnDescr.addEventListener('click', function() {
        textRew.style.display = 'none';
        textDescr.style.display = 'block';
        btnRew.classList.remove('card-menu__btn_active');
        btnDescr.classList.add('card-menu__btn_active');
    });

    btnRew.addEventListener('click', function() {
        textDescr.style.display = 'none';
        textRew.style.display = 'block';
        btnRew.classList.add('card-menu__btn_active');
        btnDescr.classList.remove('card-menu__btn_active');
    });
});
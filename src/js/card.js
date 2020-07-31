import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
import 'jscrollpane';
// import 'bootstrap';
import './inputmask.js';
// import './jquery.mousewheel.js';
// import './jquery.jscrollpane.min.js';
// import './slick.min.js';
// import './index.js';

import '../css/style.css';
import '../css/slick.css';

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //слайдер
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: true,
                }
            }
        ]
    });

    //изменение цвета корзины при клике на кнопку "В корзину"
    let btnBuy = document.querySelector('.product-buy__btn_1'),
        img = document.querySelector('.product-buy__btn-img');

    //нажали кнопку мыши на элементе
    btnBuy.addEventListener('mousedown', function() {
       img.classList.add('product-buy__btn-img_active');
    });
    //отжали кнопку мыши на элементе
    btnBuy.addEventListener('mouseup', function() {
        img.classList.remove('product-buy__btn-img_active');
    });


    //добавление в корзину
    let plus = document.querySelector('.product-buy__plus'),
        minus = document.querySelector('.product-buy__minus'),
        amount = document.querySelector('.product-buy__amount'),
        oldPriceDiv = document.querySelector('.product-buy__old-num'),
        newPriceDiv = document.querySelector('.product-buy__new-num'),
        oldprice = 15050,
        newprice = 4970;

        oldPriceDiv.innerHTML = oldprice;
        newPriceDiv.innerHTML =  newprice;

    plus.addEventListener('click', incProduct);
    minus.addEventListener('click', decrProduct);

    function incProduct() {
        // console.log(typeof(amount.innerHTML));
        let numAmount = Number(amount.innerHTML);
        amount.innerHTML = numAmount + 1;

        oldPriceDiv.innerHTML = oldprice * (amount.innerHTML);
        newPriceDiv.innerHTML = newprice * (amount.innerHTML);
    }

    function decrProduct() {
        let numAmount = Number(amount.innerHTML);

        if (numAmount > 1) {
            amount.innerHTML = numAmount - 1;
        }
        
        oldPriceDiv.innerHTML = oldprice * (amount.innerHTML);
        newPriceDiv.innerHTML = newprice * (amount.innerHTML);
    }

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

    //модальное окно
    let overlay = document.querySelector('.overlay'),
    btnCall = document.getElementById('btn_call'),
    close = document.querySelector('.close'),
    inputName = document.querySelector('.form-content__input_name'),
    inputPhone = document.querySelector('.form-content__input_phone');

    btnCall.addEventListener('click', openModalCall);
    close.addEventListener('click', function() {
        inputName.value = '';
        inputPhone.value = '';
        
        overlay.style.display = "none";
    });

    function openModalCall() {
        overlay.style.display = 'block';
    }
    

});
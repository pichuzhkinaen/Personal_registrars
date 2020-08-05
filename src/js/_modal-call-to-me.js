document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    //модальное окно после клика на кнопку "Перезвонить"
    let overlay = document.querySelector('.overlay'),
        btnCall = document.querySelectorAll('.button_call'),
        close = document.querySelector('.close'),
        inputName = document.querySelector('.form-content__input_name'),
        inputPhone = document.querySelector('.form-content__input_phone');

    for (let i = 0; i < btnCall.length; i++) {
        btnCall[i].addEventListener('click', openModalCall);
    }

    close.addEventListener('click', function() {
        inputName.value = '';
        inputPhone.value = '';

        overlay.style.display = "none";
    });

    function openModalCall() {
        overlay.style.display = 'block';
    }
});
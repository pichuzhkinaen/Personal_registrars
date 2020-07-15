window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    let form = document.querySelector('.form'),
        phone = document.getElementById('phone');


    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(phone);


    //отправка формы происходит по нажатию Enter или кнопки Отправить
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        name.value = '';
        phone.value = '';
    });
});
import $ from 'jquery';
window.$ = window.jQuery = $;
import './inputmask.js';
import 'jscrollpane';
import './jquery.mousewheel.js';
import './_modal-call-to-me';
import './_search-city';
import './_drop-down-list-info';

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

    // console.log(document);
        
    let form = document.querySelector('.form'),
        phone = document.getElementById('phone');


    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(phone);

    //скролл в табах
    $(function() {
        $('#tab-content_who').jScrollPane();
        $('#tab-content_why').jScrollPane();
    });

    //переключение контента при нажатии на кнопки "Кто?" или "Для чего?"
    let btnWho = document.getElementById('tab-btn_who'),
        btnWhy = document.getElementById('tab-btn_why'),
        tabWho = document.getElementById('tab-content_who'),
        tabWhy = document.getElementById('tab-content_why');

    tabWhy.style.display = 'none'; //скрытие по умолчанию контента таба "Для кого?"
    btnWho.classList.add('btn-who_active');

    btnWho.addEventListener('click', tabToSwitch);
    btnWhy.addEventListener('click', tabToSwitch);

    function tabToSwitch (e) {
        if (this.id == 'tab-btn_who') {
            tabWhy.style.display = 'none';
            tabWho.style.display = 'block';
            btnWho.classList.add('btn-who_active');
            btnWhy.classList.remove('btn-why_active');
            $('#tab-content_who').data('jsp').reinitialise();
        } else {
            tabWho.style.display = 'none';
            tabWhy.style.display = 'block';
            btnWhy.classList.add('btn-why_active');
            btnWho.classList.remove('btn-who_active');
            $('#tab-content_why').data('jsp').reinitialise();
        }
    }
    
    //pop-up-уведомление
    let popUP = document.querySelector('.pop-up'),
        btnConsult = document.getElementById('consult'),
        nameForm = document.getElementById('name'),
        phoneForm = document.getElementById('phone'),
        closePopUp = document.querySelector('.pop-up__close');

    popUP.style.display = 'none';

    btnConsult.addEventListener('click', function() {
        event.preventDefault();
        if (nameForm.value != 0 && phoneForm.value != 0) {
            popUP.style.display = 'block';
        }
    });

    closePopUp.addEventListener('click', function() {
        popUP.style.display = 'none';
    });
});
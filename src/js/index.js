<<<<<<< HEAD
import $ from 'jquery';
window.$ = window.jQuery = $;
// import 'bootstrap';
import './inputmask.js';
import 'jscrollpane';
// import './jquery.mousewheel.js';
// import './jquery.jscrollpane.min.js';
import './slick.min.js';
// import './card.js';

import '../css/style.css';


=======
>>>>>>> 58da429605829396f10481dfdf956b27fabd96aa
window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    let form = document.querySelector('.form'),
        phone = document.getElementById('phone');


    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(phone);

<<<<<<< HEAD
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

    //модальное окно для поиска города
    let overlaySearch = document.getElementById('overlay-search'),
        inputSearch = document.querySelector('.search-city__input'),
        currentLocation = document.querySelector('.contacts-block__location_link'),
        searchClose = document.querySelector('.modal-search__close');

    currentLocation.addEventListener('click', function() {
        overlaySearch.style.display = 'block';
    });

    searchClose.addEventListener('click', function() {
        overlaySearch.style.display = 'none';
    });

    //выбор города
    const cities = ["Москва",
                    "Санкт-Петербург",
                    "Новосибирск",
                    "Екатеринбург",
                    "Нижний Новгород",
                    "Казань",
                    "Самара",
                    "Челябинск",
                    "Омск",
                    "Ростов-на-Дону",
                    "Уфа",
                    "Красноярск",
                    "Пермь",
                    "Волгоград",
                    "Воронеж",
                    "Саратов",
                    "Краснодар",
                    "Тольятти",
                    "Тюмень",
                    "Ижевск",
                    "Барнаул",
                    "Ульяновск",
                    "Иркутск",
                    "Владивосток",
                    "Ярославль",
                    "Хабаровск",
                    "Махачкала",
                    "Оренбург",
                    "Томск",
                    "Новокузнецк",
                    "Кемерово",
                    "Астрахань",
                    "Рязань",
                    "Набережные Челны",
                    "Пенза",
                    "Липецк",
                    "Тула",
                    "Киров",
                    "Чебоксары",
                    "Калининград",
                    "Курск",
                    "Улан-Удэ",
                    "Ставрополь",
                    "Магнитогорск",
                    "Тверь",
                    "Иваново",
                    "Брянск",
                    "Сочи",
                    "Белгород",
                    "Сургут"];

    let searchBtn = document.querySelector('.search-city__btn');
    searchBtn.addEventListener('click', search);

    //поиск городов по введенным буквам при нажатии кнопки поиска
    function search() {
        let searchStr = document.querySelector('.search-city__input').value,
            regexp = new RegExp(searchStr, "ig"),
            res1 = searchCities(cities, regexp),
            cityList = document.querySelector('.search-city__list');

        for (let i = cityList.children.length - 1; i >= 0; i--) {
            cityList.children[i].remove();
        }
        showCities(res1);
    }

    showCities(cities);


    //результат функции - список городов, в котором есть введенные пользователем буквы
    function searchCities(citiesArr, expr) {
        let result = [];
            // citiesSort = citiesArr.sort();

        for (let i = 0; i < citiesArr.length; i++) {
            if (expr.test(citiesArr[i]) == true){
                result.push(citiesArr[i]);
            } 
        }
        return result;
    }

    
    //отрисовка списка городов, которые передаются в функцию
    function showCities(citiesArr) {

        let citiesSort = citiesArr.sort(),
            letter = citiesSort[0][0],
            cityList = document.querySelector('.search-city__list'),
            cityWrapper = document.createElement('div'),
            divLetter = document.createElement('div');
        
        cityList.appendChild(cityWrapper);
        divLetter.classList.add('search-city__letter');
        divLetter.innerHTML = letter;
        cityWrapper.appendChild(divLetter);

        for (let i = 0; i < citiesSort.length; i++) {

            if ((citiesSort[i][0] == letter)){
                
                let divCity = document.createElement('div');

                divCity.addEventListener('click', selectCity);

                divCity.classList.add('search-city__city');
                divCity.innerHTML = citiesSort[i];
                cityWrapper.appendChild(divCity);
            }
            else if ((citiesSort[i][0] != letter)){
                letter = citiesSort[i][0];
                let divLetter = document.createElement('div');

                cityWrapper = document.createElement('div');

                cityList.appendChild(cityWrapper);
                divLetter.classList.add('search-city__letter');
                divLetter.innerHTML = letter;
                cityWrapper.appendChild(divLetter);

                let divCity = document.createElement('div');

                divCity.addEventListener('click', selectCity);

                divCity.classList.add('search-city__city');
                divCity.innerHTML = citiesSort[i];
                cityWrapper.appendChild(divCity);

            }
        }
    }

    function selectCity() {
        overlaySearch.style.display = 'none';
        currentLocation.innerHTML = this.innerHTML;
        // console.log(this.innerHTML);
    }

=======

    //отправка формы происходит по нажатию Enter или кнопки Отправить
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        name.value = '';
        phone.value = '';
    });

    //скрытие по умолчанию контента таба "Для кого?"
    let tabWhy = document.getElementById('tab-content_why');
    tabWhy.style.display = "none";

    //скролл в табах
    $(function() {
        $('.scroll-pane').jScrollPane();
    });
>>>>>>> 58da429605829396f10481dfdf956b27fabd96aa
});
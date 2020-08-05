document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //модальное окно для поиска города
    let overlaySearch = document.querySelectorAll('.overlay-search'),
        inputSearch = document.querySelectorAll('.search-city__input'),
        currentLocation = document.querySelectorAll('.contacts-block__location_link'),
        searchClose = document.querySelectorAll('.modal-search__close'),
        searchBtn = document.querySelectorAll('.search-city__btn');


    for (let i = 0; i < currentLocation.length; i++) {
        currentLocation[i].addEventListener('click', function() {
            for (let j = 0; j < overlaySearch.length; j++) {
                overlaySearch[j].style.display = 'block';
                search();

                searchClose[j].addEventListener('click', function() {
                    overlaySearch[j].style.display = 'none';
                });
        
                searchBtn[j].addEventListener('click', search);
            }
        });
    }

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
        for (let i = 0; i < currentLocation.length; i++) {
            for (let j = 0; j < overlaySearch.length; j++) {
                overlaySearch[j].style.display = 'none';
                currentLocation[i].innerHTML = this.innerHTML;
                // console.log(this.innerHTML);
            }
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    let menuLink = document.querySelectorAll('.menu__item_drop-down');

    // console.log(menuLink);
    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click', openDropDownMenu);
            // console.log(this.childNodes);      
    }
    // console.log(body);
    document.addEventListener('click', function() {
        let subMenu = document.querySelectorAll('.submenu'),
            arrowMenu = document.querySelectorAll('.arrow');

        for (let i = 0; i < subMenu.length; i++) {
            if (subMenu[i].classList.contains('submenu_active')) {
                subMenu[i].classList.remove('submenu_active');
                arrowMenu[i].classList.remove('arrow_active');
            }
        }
    });

    function openDropDownMenu() {
        event.stopPropagation(); //прекращение всплытия
        // console.log(this.querySelector('.submenu'));
        let targetSubMenu = this.querySelector('.submenu'),
            targetArrow = this.querySelector('.arrow');

        // console.log(event.target);

        if (!(targetSubMenu.classList.contains('submenu_active'))) {
            targetSubMenu.classList.add('submenu_active');
            targetArrow.classList.add('arrow_active');
            
        } else {
            targetSubMenu.classList.remove('submenu_active');
            targetArrow.classList.remove('arrow_active');
        }
    }

});
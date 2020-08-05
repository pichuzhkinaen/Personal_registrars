document.addEventListener('DOMContentLoaded', function() {
    'use strict';

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
        newprice = 4970,
        btnBasket = document.querySelector('.product-buy__btn_1');

        oldPriceDiv.innerHTML = oldprice;
        newPriceDiv.innerHTML =  newprice;


    plus.addEventListener('click', incProduct);
    minus.addEventListener('click', decrProduct);
    btnBasket.addEventListener('click', addShopCart);


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


    function addShopCart() {
        let amount = document.querySelector('.product-buy__amount').innerHTML,
            newPriceDiv = document.querySelector('.product-buy__new-num').innerHTML,
            totalSum = document.querySelector('.buy__sum'),
            goodsSum = document.querySelector('.buy-basket__circle');

        totalSum.innerHTML = newPriceDiv;
        goodsSum.innerHTML = amount;
    }
});
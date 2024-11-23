
let curtainColor = 'cold-white';
let curtainSize = 'medium';
let image = document.querySelector('.pop-up_card_img');
let image2 = document.querySelector('.pop-up_second_card_img');
let priceText = document.querySelector('.price');
let priceTextAlt = document.querySelector('.price1');
let type = 'Водопад';


function formRadioSize() {
    if (event.target.name = 'customRadio1') {
        console.log(event.target.value);
        curtainSize = event.target.value;
        console.log(curtainSize, curtainColor);


    }
    chng();
}
function formRadioColor() {
    if (event.target.name = 'customRadio') {
        console.log(event.target.value);
        curtainColor = event.target.value;

    }
    chng();
}

function chng() {
    if (curtainColor == 'warm-white') {
        image.style = 'background-image: url(images/variable/waterfall-buy-warm.png);';
    }
    if (curtainColor == 'cold-white') {
        image.style = 'background-image: url(images/variable/waterfall-buy-cold.png);';
    }
    if (curtainColor == 'blue') {
        image.style = 'background-image: url(images/variable/waterfall-buy-blue.png);';
    }


    if (curtainColor == 'multicolor') {
        image.style = 'background-image: url(images/variable/waterfall-buy-multi.png);';
    }


    if (curtainSize == 'medium') {
        priceText.innerHTML = '490 грн.';

    }

    if (curtainSize == 'large') {
        priceText.innerHTML = '790 грн.';
    }
    if (curtainSize == 'extraLarge') {
        priceText.innerHTML = '990 грн.';
    }
}


document.querySelector(".pop-up_second_card_selection__button").addEventListener("click", function(){
    if(customerName.value !== '' && customerPhone.value !== ''){
        console.log(customerName.value, customerPhone.value);
        console.log(type, curtainSize, curtainColor);
        
    }
})
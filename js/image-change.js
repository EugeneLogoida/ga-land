
let curtainColor = 'cold-white';
let curtainSize = 'small';
let image = document.querySelector('.pop-up_card_img');
let image2 = document.querySelector('.pop-up_second_card_img');
let priceText = document.querySelector('.price');
let priceTextAlt = document.querySelector('.price1');
let type = 'Штора-роса';


function formRadioSize(){
    if(event.target.name = 'customRadio1'){
        console.log(event.target.value);
        curtainSize = event.target.value;
        
        
    }
    chng();
}
function formRadioColor(){
    if(event.target.name = 'customRadio'){
        console.log(event.target.value);
        curtainColor = event.target.value;
        
    }
    chng();
}

function chng(){
    if(curtainColor == 'warm-white' && curtainSize == 'small') {
        image.style = 'background-image: url(images/variable/12.png);';
    }
    if(curtainColor == 'warm-white' && curtainSize == 'medium') {
        image.style = 'background-image: url(images/variable/2х2.png);';
    }
    if(curtainColor == 'warm-white' && curtainSize == 'large') {
        image.style = 'background-image: url(images/variable/3x2.png);';
    }
    if(curtainColor == 'warm-white' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/3х3.png);';
    }
    if(curtainColor == 'cold-white' && curtainSize == 'small') {
        image.style = 'background-image: url(images/variable/colds.png);';
    }
    if(curtainColor == 'cold-white' && curtainSize == 'medium') {
        image.style = 'background-image: url(images/variable/coldm.png);';
    }
    if(curtainColor == 'cold-white' && curtainSize == 'large') {
        image.style = 'background-image: url(images/variable/coldl.png);';
    }
    if(curtainColor == 'cold-white' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/coldxl.png);';
    }

    if(curtainColor == 'multicolor' && curtainSize == 'small') {
        image.style = 'background-image: url(images/variable/multicolors.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'medium') {
        image.style = 'background-image: url(images/variable/multicolorm.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'large') {
        image.style = 'background-image: url(images/variable/multicolorl.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/multicolorxl.png);';
    }

    if(curtainSize == 'small'){
        priceText.innerHTML = '490 грн.'; 

    } 
    if(curtainSize == 'medium') {
        priceText.innerHTML = '590 грн.'; 
    }
    if(curtainSize == 'large') {
        priceText.innerHTML = '790 грн.'; 
    }
    if(curtainSize == 'extraLarge') {
        priceText.innerHTML = '990 грн.'; 
    }
}


document.querySelector(".pop-up_second_card_selection__button").addEventListener("click", function(){
    if(customerName.value !== '' && customerPhone.value !== ''){
        console.log(customerName.value, customerPhone.value);
        console.log(type, curtainSize, curtainColor);
        
    }
})


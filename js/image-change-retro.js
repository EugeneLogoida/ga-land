let curtainColor = 'white';
let curtainSize = 'default';
let type = 'Ретро лампы';

function formRadioSize(){
    if(event.target.name = 'customRadio1'){
        console.log(event.target.value);
        curtainSize = event.target.value;
        console.log(curtainSize, curtainColor);
    }
    
}

function formRadioColor(){
    if(event.target.name = 'customRadio'){
        console.log(event.target.value);
        curtainColor = event.target.value;
        
    }  
}

document.querySelector(".pop-up_second_card_selection__button").addEventListener("click", function(){
    if(customerName.value !== '' && customerPhone.value !== ''){
        console.log(customerName.value, customerPhone.value);
        console.log(type, curtainSize, curtainColor);
        
    }
})
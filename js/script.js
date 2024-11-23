
document.querySelector(".certification-btn").addEventListener("click", function(){
    let elem = document.querySelector('.pop-up-certifications');
    elem.classList.remove('d-none');
    document.querySelector(".close_certifications").addEventListener("click", function(){
        let elem = document.querySelector('.pop-up-certifications');
        elem.classList.add('d-none');
    });
})

let customerName = document.querySelector(".customerName");
let customerPhone = document.querySelector(".customerPhone");

document.querySelector(".open_popUp").addEventListener("click", function(){
    let elem = document.querySelector('.pop-up-first');
    elem.classList.remove('d-none');
    document.querySelector(".pop-up_second_card_selection__button").addEventListener("click", function(){

        if(customerName.value !== '' && customerPhone.value !== ''){
            // elem.classList.add('d-none');
            let elem3 = document.querySelector('.pop-up-third');
            elem3.classList.remove('d-none');
            
            
        }

    })


      

});

document.querySelector(".close_btn").addEventListener("click", function(){
    let elem = document.querySelector('.pop-up');
    elem.classList.add('d-none');
});



let navbar_btn = document.querySelector("#nav-toggler");
navbar_btn.addEventListener("click", function(){
    if(!navbar_btn.classList.contains("collapsed")){
        document.querySelector('.navbar-sizing').style = "background-color: white";
        document.querySelector('.navbar-toggler-icon').style = "background-image: url(images/whiteX.svg) !important";
    }
    else {
        document.querySelector('.navbar-sizing').style = "background-color: transparent"; 
        document.querySelector('.navbar-toggler-icon').style = "background-image: url(images/burger.svg) !important";
    }

})

let writeUsName =  document.querySelector(".writeUsName");
let writeUsPhone =  document.querySelector(".writeUsPhone");

document.querySelector('.writeUs_block__white_btn').addEventListener("click", function(){
    if(writeUsName.value !== '' && writeUsPhone !== ''){
        console.log(writeUsName.value, writeUsPhone.value);
        alert("Мы вам подзвоним!")
    }
})


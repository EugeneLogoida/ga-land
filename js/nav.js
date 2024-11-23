let navbar_btn = document.querySelector("#nav-toggler");
navbar_btn.addEventListener("click", function () {
    if (!navbar_btn.classList.contains("collapsed")) {
        document.querySelector('.navbar-sizing').style = "background-color: white";
        document.querySelector('.navbar-toggler-icon').style = "background-image: url(images/whiteX.svg) !important";
    }
    else {
        document.querySelector('.navbar-sizing').style = "background-color: transparent";
        document.querySelector('.navbar-toggler-icon').style = "background-image: url(images/burger.svg) !important";
    }

})

document.querySelector(".certification-btn").addEventListener("click", function () {
    let elem = document.querySelector('.pop-up-certifications');
    elem.classList.remove('d-none');
    document.querySelector(".close_certifications").addEventListener("click", function () {
        let elem = document.querySelector('.pop-up-certifications');
        elem.classList.add('d-none');
    });
})

document.querySelector(".close_review").addEventListener("click", function () {
    let elem = document.querySelector('.pop-up');
    elem.classList.add('d-none');
});


let reviewName = document.querySelector(".reviewName");
let reviewPhone = document.querySelector(".reviewPhone");
let reviewText = document.querySelector(".reviewText");

document.querySelector(".main-review_btn").addEventListener("click", function () {
    let elem = document.querySelector('.pop-up-review');
    elem.classList.remove('d-none');

    document.querySelector(".pop-up_review__button").addEventListener("click", function () {
        if (reviewName.value !== '' && reviewText.value !== '') {
            elem.classList.add('d-none');
            console.log(reviewName.value, reviewPhone.value, reviewText.value);
        }
    })
    document.querySelector(".close_review").addEventListener("click", function () {
        elem.classList.add('d-none');
    });

});


let writeUsName =  document.querySelector(".writeUsName");
let writeUsPhone =  document.querySelector(".writeUsPhone");

document.querySelector('.writeUs_block__white_btn').addEventListener("click", function(){
    if(writeUsName.value !== '' && writeUsPhone !== ''){
        console.log(writeUsName.value, writeUsPhone.value);
        alert("Мы вам подзвоним!")
    }
})

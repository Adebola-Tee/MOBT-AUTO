function toPage2(){
    window.location.href="index2.html";
}
function toPage1(){
    window.location.href="index.html";
}
function openForm(){
    document.querySelector('.report-form').style.visibility= 'visible';
}
function popupThankyou(){
    document.querySelector('.Thank-you-container').style.visibility= 'visible';
    document.querySelector('.report-form').style.visibility= 'hidden';
}
function popOut(){
    document.querySelector('.Thank-you-container').style.visibility= 'hidden';
}
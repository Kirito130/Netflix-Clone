const redBorder1 = document.querySelector('.wr-1');
const redBorder2 = document.querySelector('.wr-2');
const redBorder3 = document.querySelector('.wr-3');

const opt1 = document.querySelector('.option1');
const opt2 = document.querySelector('.option2');
const opt3 = document.querySelector('.option3');

const cancelAnytime = document.querySelector('.cancel-anytime');
const watchAnywhere = document.querySelector('.watch-anywhere');
const pickYourPrice = document.querySelector('.pick-your-price');

opt1.addEventListener('click', (a) => {
    a.preventDefault();
});

opt2.addEventListener('click', (b) => {
    b.preventDefault();
});

opt3.addEventListener('click', (c) => {
    c.preventDefault();
});


opt1.addEventListener('click', (p) => {

    cancelAnytime.style.display = "";
    watchAnywhere.style.display = "none";
    pickYourPrice.style.display = "none";

    redBorder1.style.border = "";
    redBorder2.style.border = "none";
    redBorder3.style.border = "none";

});


opt2.addEventListener('click', (q) => {

    cancelAnytime.style.display = "none";
    watchAnywhere.style.display = "";
    pickYourPrice.style.display = "none";

    redBorder1.style.border = "none";
    redBorder2.style.border = "";
    redBorder3.style.border = "none";

});


opt3.addEventListener('click', (r) => {

    cancelAnytime.style.display = "none";
    watchAnywhere.style.display = "none";
    pickYourPrice.style.display = "";

    redBorder1.style.border = "none";
    redBorder2.style.border = "none";
    redBorder3.style.border = "";

});


watchAnywhere.style.display = "none";
pickYourPrice.style.display = "none";


redBorder2.style.border = "none";
redBorder3.style.border = "none";

var NUM_QUESTIONS = 30;
var randNumber = 0;
window.onload = function () {
    var spinner = document.getElementById('spinner');
    spinner.onclick = spinit;
    var submit = document.getElementById('submit');
    submit.onclick = getNumber;
    var el = document.querySelectorAll("span[id*=digit]");
    for (i = 0; i < el.length; i++) {
        el[i].addEventListener("animationend", randomize, false);
        el[i].addEventListener("webkitAnimationEnd", randomize, false);
        el[i].addEventListener("oanimationend", randomize, false);
        el[i].addEventListener("MSAnimationEnd", randomize, false);
    }
}

function randomize() {
    var id = Number(this.id.slice(-1));
    var rand = getSingleDigit(id);
    rand = rand === 0 ? 10 : rand;

    this.style.top = -1 * (rand - 1) + "em";
    this.classList.toggle('animate');

    function getSingleDigit(id) {
        var result = id === 2 ? randNumber % 10 : Math.floor(randNumber / 10);
        return result;
    }
}

function spinit() {
    var el = document.querySelectorAll("span[id*=digit]");
    for (i = 0; i < el.length; i++) {
        el[i].classList.toggle('animate');
    }
    // make sure number generated is different from the previous one
    var different = false;
    while (!different) {
        var temp = generateRandomInteger(1, NUM_QUESTIONS);
        if (temp != randNumber) {
            randNumber = temp;
            different = true;
        }
    }
}

function getNumber() {
    var number = document.getElementById('number');
    // Check if user input is a two-digit number
    var reg = /\d{2}/;
    var userInput = number.value;
    NUM_QUESTIONS = reg.test(userInput) && userInput.length <= 2 ? Number(userInput) : 30;
}

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
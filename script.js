let change = document.querySelector(".change");
let debut = document.querySelector(".debut");
let stop1 = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let cont = document.querySelector(".container");
let body = document.querySelector("body");



let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let secondes = document.querySelector(".secs");
let milisecs = document.querySelector(".milis");


let milis = 0;
let sec = 0;
let min = 0;
let hr = 0;


let move = null;




debut.onclick = function(){
    if (move !== null) return;
    move = setInterval(function moving() {
        milis += 10;
        if(milis === 1000){
            milis = 0;
            sec++;
        }
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }
        milisecs.textContent = String(milis).padStart(3, '0');
        secondes.textContent = String(sec).padStart(2, '0');
        minutes.textContent = String(min).padStart(2, '0');
        hours.textContent = String(hr).padStart(2, '0');
    }, 10);
};

stop1.onclick = function(){
    clearInterval(move);
    move = null;
}


reset.onclick = function(){
    clearInterval(move);
    move = null;
    milis = 0;
    sec = 0;
    min = 0;
    hr = 0;
    milisecs.textContent = String(milis).padStart(3, '0');
    secondes.textContent = String(sec).padStart(2, '0');
    minutes.textContent = String(min).padStart(2, '0');
    hours.textContent = String(hr).padStart(2, '0');
};

// let max = prompt("Enter the max value.");


let tasbeeh_verse = {
    1 : "Subhan Allah | سُبْحَانَ الله",
    2 : "Alhamdulilallah | الْحَمْدُ لِلَّهِ",
    3 : "Allahu Akbar | اللَّهُ أَكْبَرُ",
    4 : "La ilaha illallah | لَا إِلَـٰهَ إِلَّا اللَّهُ",
    5 : "Astaghfirullah | أَسْتَغْفِرُ ٱللَّٰهَ",
    6 : "Sallallahu alaihi wasallam | صَلَّى ٱللَّٰهُ عَلَيْهِ وَسَلَّمَ"
}

const i_btn = document.getElementById("incre-btn");
const d_btn = document.getElementById("decre-btn");
let verse = document.getElementById("verse");
verse.innerText = `${tasbeeh_verse[1]}`;

const in_btn_a = document.getElementById("incre-btn-a");
const de_btn_a = document.getElementById("decre-btn-a");

console.log(i_btn);
console.log(d_btn);

const curr_total = document.getElementById("current-total-number");
const total = document.getElementById("total-number");

let num = 0;
let t_num = 0;
let total_tasbeeh = 0;
let max = 100;


if (num == 0) {
    curr_total.innerHTML = `${num}/${max}`;
    total.innerHTML = "0";
}

const body_bg = document.body;
let bg_num = 1;

const bg_opacity = document.getElementById("img-opacity");
let bg_opacity_num = 100; 
let bg_op_num =  bg_opacity_num;

let bg_ob = {
    "1" : "backgrounds/bg-1.jpg",
    "2" : "backgrounds/bg-2.jpg",
    "3" : "backgrounds/bg-3.jpg",
    "4" : "backgrounds/bg-4.jpg",
    "5" : "backgrounds/bg-5.jpg",
    "6" : "backgrounds/bg-6.jpg",
    "7" : "backgrounds/bg-7.jpg",
    "8" : "backgrounds/bg-8.jpg",
    "9" : "backgrounds/bg-9.jpg",
    "10": "backgrounds/bg-10.jpg",
    "11": "backgrounds/bg-11.jpg"
}
console.log(`Background no: ${bg_num}`);
body_bg.style.backgroundImage = `url(${bg_ob[bg_num]})`;
bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`;

let verse_num = 1;
let ran = 1;

function plus() {
    in_btn_a.innerText = "";
    if (num >= max) {
        num = 0
        curr_total.innerHTML = `${num}/${max}`;
        
        //                    IF        TRUE : FALSE
        // variablename = (condition) ? value1:value2
        verse_num = verse_num >= Object.keys(tasbeeh_verse).length ? 1 : verse_num + 1;
        verse.innerText = `${tasbeeh_verse[verse_num]}`;
        // verse_num = verse_num < Object.keys(tasbeeh_verse).length ? verse_num + 1 : 1;

        /* Randomly generate the number for background */
        // let ran = Math.floor(Math.random()*(Object.keys(bg_ob).length)) + 1;
        // bg_num = ran;

        /* Sequntially changes the background */
        bg_num = bg_num >= Object.keys(bg_ob).length ? 1 : bg_num += 1;
        body_bg.style.backgroundImage = `url(${bg_ob[bg_num]})`;
        
        bg_op_num = bg_opacity_num;
        bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`

        console.log(`Background no: ${bg_num}`);
        
        return
    }
    num += 1;
    t_num += 1;

    bg_op_num -= 1;
    bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`

    curr_total.innerHTML = `${num}/${max}`;
    total.innerHTML = t_num;
    return;
}

//Not Functional
function changeMax() {
    if (max === 99) max = 33;
    if (max === 33) max = 99;
    if (num >= max) {
        num = max;
    }
    curr_total.innerHTML = `${num}/${max}`;
    return
}

/*
function minus() {
    num -= 1;
    if (num !== 0) {
        t_num -= 1;
    }
    bg_op_num += 1;
    bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`

    if (num <= 0 || t_num <= 0) {
        num = 0;
        bg_op_num = bg_opacity_num;
        bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`
        
        if (t_num <= 0) t_num = 0;
        total.innerHTML = t_num;
    }
    curr_total.innerHTML = `${num}/${max}`;
    total.innerHTML = t_num;
    return;
} */

function minus() {
    de_btn_a.innerText = "";
    if (num > 0) {
        num -= 1;
        t_num -= 1;
    }
    else {
        num -= 1;
    }

    bg_op_num += 1;
    bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`;

    if (num < 0) num = 0;
    if (t_num < 0) t_num = 0;

    curr_total.innerHTML = `${num}/${max}`;
    total.innerHTML = t_num;
}



const tr = document.getElementById("total-reset")
const tn = document.getElementById("total-number")

function reset() {
    num = 0;
    t_num = 0;

    bg_op_num =  bg_opacity_num;
    // bg_op_num =  0;
    bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`;

    ran = Math.floor(Math.random()*(Object.keys(bg_ob).length)) + 1;
    bg_num = ran;
    body_bg.style.backgroundImage = `url(${bg_ob[bg_num]})`;
    console.log(`Background no: ${ran}`);

    tn.innerHTML = "0";
    curr_total.innerHTML = `${num}/${max}`;
    return
}

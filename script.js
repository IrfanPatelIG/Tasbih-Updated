
// let max = prompt("Enter the max value.");


let tasbeeh_verse = {
    1 : "Subhan Allah | سُبْحَانَ الله",
    2 : "Alhamdulilallah | الْحَمْدُ لِلَّهِ",
    3 : "Allahu Akbar | اللَّهُ أَكْبَرُ",
    4 : "La ilaha illallah | لَا إِلَـٰهَ إِلَّا اللَّهُ",
    5 : "Astaghfirullah | أَسْتَغْفِرُ ٱللَّٰهَ",
    6 : "Sallallahu alaihi wasallam | صَلَّى ٱللَّٰهُ عَلَيْهِ وَسَلَّمَ"
}

const i_btn = document.getElementById("incre-btn"); // Incremnet Button
const d_btn = document.getElementById("decre-btn"); // Decremnet Button
console.log(i_btn);
console.log(d_btn);
const Sound = document.getElementById("tap-sound"); // Audio tag
Sound.volume = 0.5;

// for Plus and Minus Symbols
const in_btn_a = document.getElementById("incre-btn-a");
const de_btn_a = document.getElementById("decre-btn-a");

// for Tasbeeh Verse
let verse = document.getElementById("verse");
verse.innerText = `${tasbeeh_verse[1]}`;
let verse_num = 1;

// To Display Numbers
let maxDiv = document.getElementById("max");
let curr_total = document.getElementById("current-total-number");
let total = document.getElementById("total-number");
let total_tasbeeh_number = document.getElementById("total-tasbeeh-number");
// Required variables for numbers manipulation
let num = 0;
let t_num = 0;
let total_tasbeeh = 0;
let total_tasbeeh_count = 0;
let max = 100;

// displaying Initial values
if (num == 0) {
    maxDiv.textContent = max;
    curr_total.textContent = `${num}/${max}`;
    total.innerHTML = "0";
    total_tasbeeh_number.innerHTML = "0";
}

// for Background purpose
const body_bg = document.body;
let bg_num = 3;
const bg_opacity = document.getElementById("img-opacity");  // HTML tag on which Oapcity has to be set
let bg_opacity_num = 100;  // for Manipulating Opacity value (variable: number)
let bg_op_num =  bg_opacity_num;  // for assigning Opacity Value to the HTML tag
let ran = 1;  // to assign random background after reset() called

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


// for Sound Enabled Checking
const checkbox_Sound = document.getElementById("sound-checkbox");

// Tap-Sound function
function playTapSound() {
    Sound.src = "sounds/smooth-pop.mp3";
    Sound.volume = 1;
    Sound.playbackRate = 1.7;
    Sound.currentTime = 0.025;
    Sound.play();
    Sound.currentTime = 0.025;
}
// Complete sound function
function playFinishSound(vol) {
    Sound.src = "sounds/quick-win-notification.wav";
    Sound.volume = vol;
    Sound.playbackRate = 1.51;
    Sound.currentTime = 0.05;
    Sound.play();
}

// Vibration on click 
let lowVibrate = 50;
let highVibrate = 350;
function vibrateDevice(value) {
    if (navigator.vibrate) {
        navigator.vibrate(value); // Vibrates for 1000 milliseconds (1 second)
        // console.log("Vibrator is available")
        // console.log("Vbrating frequency", value)
    }
}

// Increment button logic
function plus() {
    if (checkbox_Sound.checked) {
        playTapSound();
    }
    vibrateDevice(lowVibrate);
    in_btn_a.innerText = "";
    if (num >= max) {
        num = 0
        curr_total.innerHTML = `${num}/${max}`;
        
        if (checkbox_Sound.checked) {
            playFinishSound(.21);
            vibrateDevice(highVibrate);
        }

        if (t_num) {
            // tasbeeh count increasing
            total_tasbeeh_count ++;
            total_tasbeeh_number.innerHTML = total_tasbeeh_count;
        }
        
        //                    IF        TRUE : FALSE
        // variablename = (condition) ? value1:value2
        verse_num = verse_num >= Object.keys(tasbeeh_verse).length ? 1 : verse_num + 1;
        verse.innerText = `${tasbeeh_verse[verse_num]}`;

        /* Sequntially changes the background */
        bg_num = bg_num >= Object.keys(bg_ob).length ? 1 : bg_num += 1;
        document.querySelector(".background-img").style.transitionDelay = '0';
        body_bg.style.backgroundImage = `url(${bg_ob[bg_num]})`;
            
        bg_op_num = bg_opacity_num;
        bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`
            
        // console.log(`Background no: ${bg_num}`);
        return
    }
    num += 1;
    t_num += 1;

    // Background opacity handler
    if (max === 100) {
        bg_op_num -= 1;
        console.log(`Bg-op: ${bg_op_num}`)
    }
    else {
        if (num == max) {
            bg_op_num -= 4;
            console.log(`Bg-op: ${bg_op_num}`)
        }
        bg_op_num -= 3;
        console.log(`Bg-op: ${bg_op_num}`)
    }
    bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`

    curr_total.innerHTML = `${num}/${max}`;
    total.innerHTML = t_num;
    return;
}

// Decremnet button logic
function minus() {
    if (checkbox_Sound.checked) {
        playTapSound();
    }
    vibrateDevice(lowVibrate);
    de_btn_a.innerText = "";
    if (num > 0) {
        num -= 1;
        t_num -= 1;
    }
    else {
        num -= 1;
    }

    // Background opacity handler
    if (max === 100) {
        if(bg_op_num >= 100) {
            bg_op_num = 100
            console.log(`Bg-op: ${bg_op_num}`)
        }
        else {
            bg_op_num += 1
            console.log(`Bg-op: ${bg_op_num}`)
        }
    }
    else {
        if(bg_op_num >= 100) {
            bg_op_num = 100
            console.log(`Bg-op: ${bg_op_num}`)
        }
        else {
            if (bg_op_num == 100) bg_op_num += 4
            bg_op_num += 3
            console.log(`Bg-op: ${bg_op_num}`)
        }
    }
    bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`;

    if (num < 0) num = 0;
    if (t_num <= 0) t_num = 0;

    curr_total.innerHTML = `${num}/${max}`;
    total.innerHTML = t_num;
}

// Changing max value
function cahngeMax() {
    if (max === 100) {
        max = 33;
        maxDiv.textContent = max;
        bg_op_num = 100 - num;
    }
    else if (max === 33) {
        max = 100;
        maxDiv.textContent = max;
        bg_op_num = 100 - num;
    }
    if (num >= max) {
        num = max;
        bg_op_num = 0;
        bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`;
    }
    
    curr_total.innerHTML = `${num}/${max}`;
    console.log(`Changed max to: ${max}`)
}

maxDiv.addEventListener("click", ()=>{
    cahngeMax(); 
});

function reset() {
    if (num > 0 || t_num > 0) {
        vibrateDevice(highVibrate);
        let cReset = confirm("Are you sure you want to reset all your counter to 0?")
        if (cReset) {
            num = 0;
            t_num = 0;
            total_tasbeeh_count = 0;
    
            bg_op_num =  bg_opacity_num;
            bg_opacity.style.backgroundColor = `rgb(0 0 0 / ${bg_op_num}%)`;
    
            ran = Math.floor(Math.random()*(Object.keys(bg_ob).length)) + 1;
            bg_num = ran;
            body_bg.style.backgroundImage = `url(${bg_ob[bg_num]})`;
            console.log(`Background no: ${ran}`);

            curr_total.innerHTML = `${num}/${max}`;
            total_tasbeeh_number.innerHTML = total_tasbeeh_count;

            setTimeout(()=>{
                total.innerHTML = t_num;
            }, 1000)
    
            console.log("The counter has been reset to 0.")
        }
        else {
            console.log("You canceled the reset.")
        }
    }
    else {
        console.log("Counters are already at 0.\nNo reset needed.");
    }
    return
}

function changeTasbeeh() {
    verse_num = verse_num >= Object.keys(tasbeeh_verse).length ? 1 : verse_num + 1;
    verse.innerText = `${tasbeeh_verse[verse_num]}`;
}

// to cahnge the Current displaying Verse
verse.addEventListener("click", (e)=>{
    changeTasbeeh();
})

// to cahnge the Current displaying Verse to the User specified Verse
verse.addEventListener("dblclick", (e)=>{
    let newVerse = prompt("Type your custom verse for Tasbeeh here.");
    if(newVerse){
        verse.textContent = `${newVerse}`;
    }
})

// Incrementing / Decrementing by Keyboard buttons
document.addEventListener("keyup", (e)=>{
    // console.log(e.key)
    if(e.key == "ArrowUp" || e.key == "w" || e.key == "W") {
        plus();
    }
    else if(e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
        plus();
    }
    else if (e.key == "ArrowDown" || e.key == "s" || e.key == "S") {
        minus();
    }
    else if (e.key == "ArrowLeft" || e.key == "a" || e.key == "A") {
        minus();
    }
    else if (e.key == "c" || e.key == "C") {
        cahngeMax();
    }
    else if (e.key == "t" || e.key == "T") {
        changeTasbeeh();
    }
    else if (e.key == "r" || e.key == "R") {
        reset();
    }
})

// for Fast incrementing / decrementing by Keyboard buttons
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey) {
        if (e.key == "ArrowUp") plus()
        else if (e.key == "ArrowDown") minus()
        else if (e.key == "ArrowRight") plus()
        else if (e.key == "ArrowLeft") minus()
    }
})

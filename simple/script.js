// Typing Effect
const text = "Just like a rose my gussu, my love for you grows more beautiful with every passing day.";
let index = 0;

function type(){
    if(index < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 60);
    }
}

type();


// Popup
function showLove(){
    alert("Happy Rose Day! 🌹 mera gussu, mera cuta gussu 💖");
}


// Floating Hearts Generator
function createHeart(){
    const heart = document.createElement("span");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random()*20 + 15 + "px";
    heart.style.animationDuration = Math.random()*5 + 5 + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

setInterval(createHeart, 300);
function goToSecond(){
    window.location.href = "second.html";
}


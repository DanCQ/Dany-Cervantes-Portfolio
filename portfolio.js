let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

let array = [
    {
        name: "The Anatomy of the Guitar",
        img: "assets/guitar.jpg",
        href: "https://dancq.github.io/The-Anatomy-of-the-Guitar/"
    },
    {
        name: "Bitcoin Halving Countdown",
        img: "assets/bitcoin.jpg",
        href: "https://dancq.github.io/Bitcoin-Halving-Countdown/"
    },
    {
        name: "Bouncing Colors",
        img: "assets/colors.jpg",
        href: "https://dancq.github.io/Bouncing-Colors/"
    },
    {
        name: "Canvas Workshop",
        img: "assets/workshop.jpg",
        href: "https://dancq.github.io/Canvas-Workshop/"
    },
    {
        name: "Digital Clock",
        img: "assets/clock.jpg",
        href: "https://dancq.github.io/Digital-Clock--Javascript/"
    },
    {
        name: "Fireworks",
        img: "assets/fireworks.jpg",
        href: "https://dancq.github.io/Fireworks/"
    },
    {
        name: "George R. R. Martin Tribute",
        img: "assets/grrm.jpg",
        href: "https://dancq.github.io/George-R-R-Martin-Tribute/"
    },
    {
        name: "Lost Treasure",
        img: "assets/treasure.jpg",
        href: "https://dancq.github.io/Lost-Treasure/"
    },
    {
        name: "Notfux",
        img: "assets/notfux.png",
        href: "https://dancq.github.io/Not-Netflix/"
    },
    {
        name: "Perlin Snake",
        img: "assets/snake.jpg",
        href: "https://dancq.github.io/Perlin-Snake/"
    },
    {
        name: "Pig Latin Translator",
        img: "assets/piglatin.jpg",
        href: "https://dancq.github.io/Pig-Latin-Translator/"
    },
    {
        name: "Sine Waves",
        img: "assets/sinewave.jpg",
        href: "https://dancq.github.io/Sine-Waves/"
    },
    {
        name: "Spinning Galaxy",
        img: "assets/galaxy.jpg",
        href: "https://dancq.github.io/Spinning-Galaxy/"
    },
    {
        name: "Robot Spoof",
        img: "assets/robot.jpg",
        href: "https://dancq.github.io/Robot-Spoof/"
    },
    {
        name: "Space Shooter",
        img: "assets/shooter.jpg",
        href: "https://dancq.github.io/Space-Shooter/"
    },
    {
        name: "Speak With The Matrix",
        img: "assets/matrix.jpg",
        href: "https://dancq.github.io/Speak-With-The-Matrix/"
    },
    {
        name: "Spooky",
        img: "assets/spooky.jpg",
        href: "https://dancq.github.io/Spooky/"
    },
    {
        name: "Starship in Space",
        img: "assets/starship.jpg",
        href: "https://DanCQ.github.io/Starship-in-Space"
    },
    {
        name: 'Universal Language Translator',
        img: 'assets/translator.jpg',
        href: 'https://dancq.github.io/Language-Translator/'
    }
];


let j = randomRange(0, array.length - 1);
let i = j - 1;
let k = j + 1;


//Returns a random number within a chosen range
function randomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
//Math.random() returns a random decimal between 0 - 0.99
}

arrowLeft.onclick = function() { 
    i++;
    j++;
    k++;

    arrayCountCheck();
};

arrowRight.onclick = function() {
    i--;
    j--;
    k--;

    arrayCountCheck();
};

function arrayCountCheck() {
    if(i < 0) {
        i = array.length - 1;
    }
    if(j < 0) {
        j = array.length - 1;
    }
    if(k < 0) {
        k = array.length - 1;
    }

    if(i > array.length - 1) {
        i = 0;
    }
    if(j > array.length - 1) {
        j = 0;
    }
    if(k > array.length - 1) {
        k = 0;
    }

    displayOn();
}


//preloads images into cache
function preloadImages() {

    array.forEach(obj => {

        let img = new Image();
        img.src = obj.img;
    });

}

    
function displayOn() {

    let carouselLeft = document.getElementById("carousel-left");
    let nameLeft = document.getElementById("name-left");

    let carouselMiddle = document.getElementById("carousel-middle");
    let nameMiddle = document.getElementById("name-middle");

    let carouselRight = document.getElementById("carousel-right");
    let nameRight = document.getElementById("name-right");

    nameLeft.innerHTML = array[i].name; //"url(assets/matrix.jpg)",
    carouselLeft.style.background = `url(${array[i].img})`;
    carouselLeft.onclick = function() { window.open( array[i].href ) };
    
    nameMiddle.innerHTML = array[j].name;
    carouselMiddle.style.background = `url(${array[j].img})`;
    carouselMiddle.onclick = function() { window.open( array[j].href ) };

    nameRight.innerHTML = array[k].name;
    carouselRight.style.background = `url(${array[k].img})`;
    carouselRight.onclick = function() { window.open( array[k].href ) };

    function picture(background) {
        background.style.backgroundPosition = "center";
        background.style.backgroundRepeat = "no-repeat";
        background.style.backgroundSize = "cover";
    }
    picture(carouselLeft);
    picture(carouselMiddle);
    picture(carouselRight);

}


window.onload = function() {
    
    arrayCountCheck();

    setTimeout(function() { preloadImages() }, 2500); //waits for visible images to load first
    
};

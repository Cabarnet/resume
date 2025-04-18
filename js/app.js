document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
        `
    })
})

window.addEventListener('load', () => {
    let layer_1 = document.querySelector(".layer-1");
    let layer_2 = document.querySelector(".layer-2");
    let main_content = document.querySelector(".main-content");

    let layers_container = document.querySelector(".layers__container");
    let vh = window.innerHeight * 0.01;
    layers_container.style.cssText = `--vh: ${vh}px`;

    layer_1.style.cssText = 'inset: -1vw; transition: 0s; opacity: 0; filter: blur(100px);';
    layer_2.style.cssText = 'inset: -1vw; transition: 0s; opacity: 0; filter: blur(100px);';
    // main_content.style.cssText = 'display: none; opacity: 0';
    setTimeout(() => {
        layer_1.style.cssText = 'inset: -1vw; transition: var(--transition-soft); filter: brightness(0.9);';
        layer_2.style.cssText = 'inset: -10vw; filter: brightness(0.9);';
    }, "1");
    // main_content.style.cssText = 'display: flex;';
    // anime({
    //     targets: '.main-content',
    //     opacity: 1,
    //     easing: 'easeInOutQuad',
    // });
})

window.addEventListener('resize', () => {
    let layers_container = document.querySelector(".layers__container");
    let vh = window.innerHeight * 0.01;
    layers_container.style.cssText = `--vh: ${vh}px`;
});



let layer_1 = document.querySelector(".layer-1");
let layer_2 = document.querySelector(".layer-2");
let isMainPage = true;
let main_content = document.querySelector(".main-content");
let skills_content = document.querySelector(".skills-content");
let exp_content = document.querySelector(".exp-content");
let about_content = document.querySelector(".about-content");
let portfolio_content = document.querySelector(".portfolio-content");


function toLeft () {
    isMainPage = false;
    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -10vw -10vw -10vw -2vw; filter: brightness(65%)';
    layer_2.style.cssText = 'inset: -5vw -10vw -10vw -15vw; transform: scale(0.5) rotate(-5deg); opacity: 0.8; filter: brightness(56%)';
    skills_content.style.cssText = 'display: flex';
    anime({
        targets: '.skills-content .skills-content__el',
        opacity: 1,
        delay: anime.stagger([600, 3000])
    });
}

function toRight () {
    isMainPage = false;
    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -10vw -2vw -10vw -10vw; filter: brightness(65%)';
    layer_2.style.cssText = 'inset: -5vw -10vw -10vw -15vw; transform: scale(0.5) rotate(-5deg); opacity: 0.8; filter: brightness(65%)';
    exp_content.style.cssText = 'display: flex';
    anime({
        targets: '.exp-content .exp-content__el',
        opacity: 1,
        delay: anime.stagger([300, 1000])
    }); 
}

function toTop () {
    isMainPage = false;
    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -1vw -10vw -10vw -10vw; filter: brightness(65%)';
    layer_2.style.cssText = 'inset: -10vw -10vw -10vw -12vw; transform: scale(0.52) rotate(-5deg); opacity: 0.9; filter: brightness(65%)';
    about_content.style.cssText = 'display: flex';
    anime({
        targets: '.about-content .about-content__el',
        translateY: 250,
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger([800, 250])
    });
}

function toBottom () {  
    isMainPage = false;
    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -10vw -10vw -1vw -10vw; filter: brightness(65%)';
    layer_2.style.cssText = 'inset: -10vw -10vw -10vw -12vw; transform: scale(0.52) rotate(-5deg); opacity: 0.9; filter: brightness(65%)';
    portfolio_content.style.cssText = 'display: flex';
    anime({
        targets: '.portfolio-content .portfolio-content__el',
        translateY: 250,
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger([2800, 50])
    });
}

function toMainPage () {
    isMainPage = true;
    skills_content.style.cssText = 'display: none';
    about_content.style.cssText = 'display: none';
    exp_content.style.cssText = 'display: none';
    portfolio_content.style.cssText = 'display: none';

    layer_2.style.cssText = 'transition: var(--transition-soft); filter: brightness(0.9);';
    layer_1.style.cssText = 'inset: -1vw; transition: var(--transition-soft); filter: brightness(0.9);';
    main_content.style.cssText = 'display: flex';
    anime({
        targets: '.main-content',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
}




let portfolio_content__el = document.querySelectorAll(".portfolio-content__el");
let portfolio_content_weather = document.querySelector("#weather");
let portfolio_content_appetite = document.querySelector("#appetite");
let portfolio_content_basketball = document.querySelector("#basketball");
let portfolio_close = document.querySelector(".portfolio-close");

function openPortfolioWeather() {
    portfolio_content__el.forEach(function(element) {
        element.style.display = 'none';
    });

    portfolio_content_weather.style.cssText = 'display: flex; opacity: 1;';
    portfolio_close.style.cssText = 'display: block';
    anime({
        targets: '.portfolio-close',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
    anime({
        targets: '.portfolio-content .portfolio-opacity',
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger([800, 250])
    });
}

function openPortfolioAppetite() {
    portfolio_content__el.forEach(function(element) {
        element.style.display = 'none';
    });

    portfolio_content_appetite.style.cssText = 'display: flex; opacity: 1;';
    portfolio_close.style.cssText = 'display: block';
    anime({
        targets: '.portfolio-close',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
    anime({
        targets: '.portfolio-content .portfolio-opacity',
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger([800, 250])
    });
}

function openPortfolioBasketball() {
    portfolio_content__el.forEach(function(element) {
        element.style.display = 'none';
    });

    portfolio_content_basketball.style.cssText = 'display: flex; opacity: 1;';
    portfolio_close.style.cssText = 'display: block';
    anime({
        targets: '.portfolio-close',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
    anime({
        targets: '.portfolio-content .portfolio-opacity',
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger([800, 250])
    });
}


function closePortfolio() {
    portfolio_content__el.forEach(function(element) {
        element.style.display = '';
    });
    portfolio_content_weather.style.cssText = 'display: none';
    portfolio_content_appetite.style.cssText = 'display: none';
    portfolio_content_basketball.style.cssText = 'display: none';
    portfolio_close.style.cssText = 'display: none';
}

function portfolioBefore() {
    let portfolio_before_img = document.querySelectorAll("#portfolio-before-img");
    let portfolio_after_img = document.querySelectorAll("#portfolio-after-img");
    let portfolio_before_button = document.querySelectorAll("#portfolio-before-button");
    let portfolio_after_button = document.querySelectorAll("#portfolio-after-button");

    portfolio_before_img.forEach(function(element) {
        element.style.display = '';
    });
    portfolio_after_img.forEach(function(element) {
        element.style.display = 'none';
    });
    portfolio_before_button.forEach(function(element) {
        element.classList.add('active');
    });
    portfolio_after_button.forEach(function(element) {
        element.classList.remove('active');
    });
}

function portfolioAfter() {
    let portfolio_before_img = document.querySelectorAll("#portfolio-before-img");
    let portfolio_after_img = document.querySelectorAll("#portfolio-after-img");
    let portfolio_before_button = document.querySelectorAll("#portfolio-before-button");
    let portfolio_after_button = document.querySelectorAll("#portfolio-after-button");

    portfolio_after_img.forEach(function(element) {
        element.style.display = '';
    });
    portfolio_before_img.forEach(function(element) {
        element.style.display = 'none';
    });
    portfolio_after_button.forEach(function(element) {
        element.classList.add('active');
    });
    portfolio_before_button.forEach(function(element) {
        element.classList.remove('active');
    });
}

// Свайпы
let swipeStartX = 0;
let swipeStartY = 0;

let swipeDirection;

document.addEventListener('touchstart', (e) => {
    swipeStartX = e.touches[0].clientX;
    swipeStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const diffX = endX - swipeStartX;
    const diffY = endY - swipeStartY;


    if (isMainPage) {
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 30) {
                toLeft(); // влево
                swipeDirection = 'left';
            } else if (diffX < -30) {
                toRight(); // вправо
                swipeDirection = 'right';
            }
        } else {
            if (diffY > 30) {
                toTop(); // вверх
                swipeDirection = 'top';
            } else if (diffY < -30) {
                toBottom(); // вниз
                swipeDirection = 'bottom';
            }
        }
    }
    else {
        // console.log(swipeDirection);
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 30 && swipeDirection === 'right') {
                toMainPage();
            } else if (diffX < -30 && swipeDirection === 'left') {
                toMainPage();
            }
        } else {
            if (diffY > 30 && swipeDirection === 'bottom') {
                toMainPage();
            } else if (diffY < -30 && swipeDirection === 'top') {
                toMainPage();
            }
        }
    }

});
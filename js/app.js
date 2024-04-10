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
    let main_content = document.querySelector(".main-content");

    let layers_container = document.querySelector(".layers__container");
    let vh = window.innerHeight * 0.01;
    layers_container.style.cssText = `--vh: ${vh}px`;

    layer_1.style.cssText = 'inset: 0vw; transition: 0s; opacity: 0; filter: blur(100px);';
    // main_content.style.cssText = 'display: none; opacity: 0';
    setTimeout(() => {
        layer_1.style.cssText = 'inset: -10vw; transition: var(--transition-soft); filter: unset;';
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
let main_content = document.querySelector(".main-content");
let skills_content = document.querySelector(".skills-content");
let exp_content = document.querySelector(".exp-content");
let about_content = document.querySelector(".about-content");
let portfolio_content = document.querySelector(".portfolio-content");


function toLeft () {
    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -10vw -10vw -10vw -2vw; filter: brightness(70%)';
    layer_2.style.cssText = 'inset: -5vw -10vw -10vw -15vw; transform: scale(0.5) rotate(-5deg); opacity: 0.8; filter: brightness(70%)';
    skills_content.style.cssText = 'display: flex';
    anime({
        targets: '.skills-content .skills-content__el',
        opacity: 1,
        delay: anime.stagger([600, 3000])
    });
}

function toRight () {
    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -10vw -2vw -10vw -10vw; filter: brightness(70%)';
    layer_2.style.cssText = 'inset: -5vw -10vw -10vw -15vw; transform: scale(0.5) rotate(-5deg); opacity: 0.8; filter: brightness(70%)';
    exp_content.style.cssText = 'display: flex';
    anime({
        targets: '.exp-content .exp-content__el',
        opacity: 1,
        delay: anime.stagger([300, 1000])
    }); 
}

function toTop () {
    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: 0vw -10vw -10vw -10vw; filter: brightness(70%)';
    layer_2.style.cssText = 'inset: -10vw -10vw -10vw -12vw; transform: scale(0.52) rotate(-5deg); opacity: 0.9; filter: brightness(70%)';
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
    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -10vw -10vw 0vw -10vw; filter: brightness(70%)';
    layer_2.style.cssText = 'inset: -10vw -10vw -10vw -12vw; transform: scale(0.52) rotate(-5deg); opacity: 0.9; filter: brightness(70%)';
    portfolio_content.style.cssText = 'display: flex';
    anime({
        targets: '.portfolio-content .portfolio-content__el',
        translateY: 250,
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger([800, 250])
    });
}

function toMainPage () {
    skills_content.style.cssText = 'display: none';
    about_content.style.cssText = 'display: none';
    exp_content.style.cssText = 'display: none';
    portfolio_content.style.cssText = 'display: none';

    layer_2.style.cssText = 'transition: var(--transition-soft);';
    layer_1.style.cssText = 'inset: -10vw; transition: var(--transition-soft);';
    main_content.style.cssText = 'display: flex';
    anime({
        targets: '.main-content',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
}




let portfolio_content__el = document.querySelectorAll(".portfolio-content__el");
let portfolio_content_weather = document.querySelector("#weather");
let portfolio_close = document.querySelector(".portfolio-close");

function openPortfolioWeather() {
    portfolio_content__el.forEach(function(element) {
        element.style.display = 'none';
    });

    portfolio_content_weather.style.cssText = 'display: flex; opacity: 1; transform: translateY(250px);';
    portfolio_close.style.cssText = 'display: block';
    anime({
        targets: '.portfolio-close',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
}

function closePortfolio() {
    portfolio_content__el.forEach(function(element) {
        element.style.display = '';
    });
    // $(".portfolio-content__el").css("display", "");
    portfolio_content_weather.style.cssText = 'display: none';
    // $("#weather").removeAttr('style');
    portfolio_close.style.cssText = 'display: none';
    // $(".portfolio-close").removeAttr('style');
}
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

    layer_1.style.cssText = 'inset: 0vw; transition: 0s; opacity: 0';
    // main_content.style.cssText = 'display: none; opacity: 0';
    setTimeout(() => {
        layer_1.style.cssText = 'inset: -10vw; transition: var(--transition-soft)';
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

function toLeft () {
    let layer_1 = document.querySelector(".layer-1");
    let main_content = document.querySelector(".main-content");
    let skills_content = document.querySelector(".skills-content");

    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -10vw -10vw -10vw -2vw';
    // $(".layer-2").css({"inset": "-5vw -10vw -10vw -15vw", "transform": "scale(0.5) rotate(-5deg)", "opacity": 0.8, "filter": "blur(4px)"});
    skills_content.style.cssText = 'display: flex';
    anime({
        targets: '.skills-content .skills-content__el',
        opacity: 1,
        delay: anime.stagger([600, 3000])
    });
}

function toRight () {
    let layer_1 = document.querySelector(".layer-1");
    let main_content = document.querySelector(".main-content");
    let music_content = document.querySelector(".music-content");

    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -10vw -2vw -10vw -10vw';
    // $(".layer-2").css({"inset": "-5vw -10vw -10vw -15vw", "transform": "scale(0.5) rotate(-5deg)", "opacity": 0.8, "filter": "blur(4px)"});
    music_content.style.cssText = 'display: flex';
    anime({
        targets: '.music-content .music-content__el',
        opacity: 1,
        delay: anime.stagger([300, 1000])
    }); 
}

function toTop () {
    let layer_1 = document.querySelector(".layer-1");
    let main_content = document.querySelector(".main-content");
    let about_content = document.querySelector(".about-content");

    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: 0vw -10vw -10vw -10vw';
    // $(".layer-2").css({"inset": "-10vw -10vw -15vw -10vw", "transform": "scale(0.45) rotate(-5deg)", "opacity": 0.9, "filter": "brightness(70%)"});
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
    let layer_1 = document.querySelector(".layer-1");
    let main_content = document.querySelector(".main-content");
    let portfolio_content = document.querySelector(".portfolio-content");

    main_content.style.cssText = 'display: none; opacity: 0';
    layer_1.style.cssText = 'inset: -10vw -10vw 0vw -10vw';
    // $(".layer-2").css({"inset": "-10vw -10vw -15vw -10vw", "transform": "scale(0.45) rotate(5deg)", "opacity": 0.9, "filter": "brightness(70%)"});
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
    let layer_1 = document.querySelector(".layer-1");
    let main_content = document.querySelector(".main-content");
    let skills_content = document.querySelector(".skills-content");
    let about_content = document.querySelector(".about-content");
    let music_content = document.querySelector(".music-content");
    let portfolio_content = document.querySelector(".portfolio-content");

    skills_content.style.cssText = 'display: none';
    about_content.style.cssText = 'display: none';
    music_content.style.cssText = 'display: none';
    portfolio_content.style.cssText = 'display: none';

    layer_1.style.cssText = 'inset: -10vw; transition: var(--transition-soft);';
    main_content.style.cssText = 'display: flex';
    anime({
        targets: '.main-content',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
}


function openPortfolioWeather() {
    let portfolio_content__el = document.querySelectorAll(".portfolio-content__el");
    let portfolio_content_weather = document.querySelector("#weather");
    let portfolio_close = document.querySelector(".portfolio-close");

    portfolio_content__el.forEach(function(element) {
        element.style.display = 'none';
    });

    portfolio_content_weather.style.cssText = portfolio_content_weather.getAttribute('style') + 'display: flex';
    portfolio_close.style.cssText = 'display: block';
    anime({
        targets: '.portfolio-close',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
}

function closePortfolio() {
    $(".portfolio-content__el").css("display", "");
    $("#weather").removeAttr('style');
    $(".portfolio-close").removeAttr('style');
}
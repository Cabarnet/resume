document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
        `
    })
})

window.addEventListener('load', () => {
    let vh = window.innerHeight * 0.01;
    $(".layers__container").css("--vh", `${vh}px`);

    $(".layer-1").css({"inset": "30vh 0vw", "transition": "0s"});
    $(".main-content").css({"display": "none", "opacity": 0});
    setTimeout(() => {
        $(".layer-1").css({"inset": "-10vw", "transition": "var(--transition-soft)"});
    }, "100");
    $(".main-content").css("display", "flex");
    anime({
        targets: '.main-content',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
})

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    $(".layers__container").css("--vh", `${vh}px`);
});

function toLeft () {
    $(".main-content").css({"display": "none", "opacity": 0});
    $(".layer-1").css({"inset": "-10vw -10vw -10vw 0vw", "filter": "blur(3px)"});
    $(".layer-2").css({"inset": "-5vw -10vw -10vw -15vw", "transform": "scale(0.5) rotate(-5deg)", "opacity": 0.8, "filter": "blur(4px)"});
    $(".skills-content").css("display", "flex");
    anime({
        targets: '.skills-content .skills-content__el',
        opacity: 1,
        delay: anime.stagger([600, 3000])
    });
}

function toRight () {
    $(".main-content").css({"display": "none", "opacity": 0});
    $(".layer-1").css({"inset": "-10vw 0vw -10vw -10vw", "filter": "blur(3px)"});
    $(".layer-2").css({"inset": "-5vw -10vw -10vw -15vw", "transform": "scale(0.5) rotate(-5deg)", "opacity": 0.8, "filter": "blur(4px)"});
    $(".music-content").css("display", "flex");
    anime({
        targets: '.music-content .music-content__el',
        opacity: 1,
        delay: anime.stagger([300, 1000])
    }); 
}

function toTop () {
    $(".main-content").css({"display": "none", "opacity": 0});
    $(".layer-1").css({"inset": "0vw -10vw -10vw -10vw", "filter": "brightness(70%)"});
    $(".layer-2").css({"inset": "-10vw -10vw -15vw -10vw", "transform": "scale(0.45) rotate(-5deg)", "opacity": 0.9, "filter": "brightness(70%)"});
    $(".about-content").css("display", "flex");
    anime({
        targets: '.about-content .about-content__el',
        translateY: 250,
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger([800, 250])
    });
    
}

function toBottom () {  
    $(".main-content").css({"display": "none", "opacity": 0});
    $(".layer-1").css({"inset": "-10vw -10vw 0vw -10vw", "filter": "brightness(70%)"});
    $(".layer-2").css({"inset": "-10vw -10vw -15vw -10vw", "transform": "scale(0.45) rotate(5deg)", "opacity": 0.9, "filter": "brightness(70%)"});
    $(".portfolio-content").css("display", "flex");
    anime({
        targets: '.portfolio-content .portfolio-content__el',
        translateY: 250,
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger([800, 250])
    });
    
}

function toMainPage () {
    $(".main-content").css("display", "flex");
    anime({
        targets: '.main-content',
        opacity: 1,
        easing: 'easeInOutQuad',
    });
    $(".skills-content").removeAttr('style');
    $(".skills-content__el").removeAttr('style');
    $(".about-content").removeAttr('style');
    $(".about-content__el").removeAttr('style');
    $(".music-content").removeAttr('style');
    $(".music-content__el").removeAttr('style');
    $(".portfolio-content").removeAttr('style');
    $(".portfolio-content__el").removeAttr('style');
    $(".layer-1").removeAttr('style');
    $(".layer-2").removeAttr('style');
}


function openPortfolioWeather() {
    $(".portfolio-content__el").css("display", "none");
    $("#weather").css("display", "flex");
    $(".portfolio-close").css("display", "block");
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
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

function musicPlayer() {
    const playBtns = document.querySelectorAll('.playBtn');
    const pauseBtns = document.querySelectorAll('.pauseBtn');
    const seekSliders = document.querySelectorAll('.seekSlider');
    const volumeSliders = document.querySelectorAll('.volumeSlider');

    let currentAudio = null; // Хранит ссылку на текущий аудиофайл

    playBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const audioId = this.dataset.audio;
            const audio = document.getElementById(audioId);
            
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause(); // При переключении на новый аудиофайл остановим предыдущий
                currentAudio.currentTime = 0;
                const prevPauseBtn = document.querySelector(`.pauseBtn[data-audio="${currentAudio.id}"]`);
                const prevPlayBtn = document.querySelector(`.playBtn[data-audio="${currentAudio.id}"]`);
                prevPauseBtn.style.display = 'none';
                prevPlayBtn.style.display = 'block';
            }

            audio.play();
            this.style.display = 'none';
            const pauseBtn = document.querySelector(`.pauseBtn[data-audio="${audioId}"]`);
            pauseBtn.style.display = 'block';
            currentAudio = audio; // Обновляем текущий аудиофайл
        });
    });

    pauseBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const audioId = this.dataset.audio;
            const audio = document.getElementById(audioId);
            audio.pause();
            this.style.display = 'none';
            const playBtn = document.querySelector(`.playBtn[data-audio="${audioId}"]`);
            playBtn.style.display = 'block';
        });
    });

    seekSliders.forEach(function(slider) {
        slider.addEventListener('input', function() {
            const audioId = this.dataset.audio;
            const audio = document.getElementById(audioId);
            audio.currentTime = (this.value / 100) * audio.duration;
        });
    });

    volumeSliders.forEach(function(slider) {
        slider.addEventListener('input', function() {
            const audioId = this.dataset.audio;
            const audio = document.getElementById(audioId);
            audio.volume = this.value;
            slider.style.background = `linear-gradient(to right, ${lightColor} 0%, ${lightColor} ${slider.value}%, ${darkColor} ${slider.value}%, ${darkColor} 100%)`;
        });
    });

    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(function(audio) {
        audio.addEventListener('timeupdate', function() {
            const slider = document.querySelector(`.seekSlider[data-audio="${audio.id}"]`);
            slider.value = (audio.currentTime / audio.duration) * 100;

            const darkColor = '#e0d9f240';
            const lightColor = '#e0d9f2';
            slider.style.background = `linear-gradient(to right, ${lightColor} 0%, ${lightColor} ${slider.value}%, ${darkColor} ${slider.value}%, ${darkColor} 100%)`;
        });

        audio.addEventListener('ended', function() {
            const audioId = this.id;
            const playBtn = document.querySelector(`.playBtn[data-audio="${audioId}"]`);
            playBtn.style.display = 'block';
            const pauseBtn = document.querySelector(`.pauseBtn[data-audio="${audioId}"]`);
            pauseBtn.style.display = 'none';
        });

        audio.addEventListener('loadedmetadata', function() {
            const slider = document.querySelector(`.seekSlider[data-audio="${audio.id}"]`);
            slider.setAttribute('max', audio.duration);
        });
    });
};
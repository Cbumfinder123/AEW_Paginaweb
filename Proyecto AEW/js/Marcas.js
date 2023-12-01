const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

if(prev) {
    prev.addEventListener('click',() => {
        slider.scrollLeft -= 300
    })
}

if(next) {
    next.addEventListener('click',() => {
        slider.scrollLeft += 300
    })
}

if(slider) {
    slider.addEventListener('scroll', () => {
        localStorage.setItem('sliderPosition', slider.scrollLeft);
    });
    document.addEventListener('DOMContentLoaded', () => {
        const savedPosition = localStorage.getItem('sliderPosition');
        if (savedPosition !== null) {
            slider.scrollLeft = savedPosition;
        }
    });
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('scrollPosition', slider.scrollLeft);
    });

    window.addEventListener('DOMContentLoaded', () => {
        const savedScrollPosition = localStorage.getItem('scrollPosition');
        if (savedScrollPosition !== null) {
            slider.scrollLeft = savedScrollPosition;
        }
    });
}

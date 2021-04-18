const smallMenu = document.querySelector('.small-menu');
const menu = document.querySelector('.bigger-menu');
const navElements = document.querySelector('nav.topnav'); 
const scrollTopButton  = document.querySelector('button'); 

function showMenu(menu) {
    if (navElements.style.display === 'none') {
        navElements.style.display = 'block';
    } else {
        navElements.style.display = 'none';
    }
}

smallMenu.addEventListener('click', ()=> {
    showMenu(smallMenu); 
})

menu.addEventListener('click', ()=> {
    if (navElements.style.visibility === 'visible') {
        navElements.style.visibility = 'hidden';
    } else {
        navElements.style.visibility = 'visible';
    }
})

navElements.addEventListener('click', (event)=> {
    if (event.target.tagName === 'A') {
        if (window.innerWidth < 541) {
            navElements.style.display = 'none'; 
        } else if (window.innerWidth > 540 && window.innerWidth < 851) {
            navElements.style.visibility = 'hidden';
        } 
    } else {
        return; 
    }
})

document.addEventListener('scroll', ()=> {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block'; 
    } else {
        scrollTopButton.style.display = 'none'; 
    }
})

scrollTopButton.addEventListener('click', ()=> {
    scrollTo(0, 0); 
})

let numOfSlides; 

if (window.innerWidth < 541) {
    numOfSlides = 1
} else if (window.innerWidth > 540 && window.innerWidth < 851) {
    numOfSlides = 2
} else {
    numOfSlides = 4
}

new Swiper('.swiper-container', {
    speed: 1000, 
    slidesPerView: numOfSlides, 
    effect: 'slide', 
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev'
    }
}); 
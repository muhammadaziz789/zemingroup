// index page number count code start
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    
    const clientsCounter = document.getElementById('clientCount');
    const servicesCounter = document.getElementById('serviceCount');
    const doctorsCounter = document.getElementById('doctorCount');
    
    let onlyOnce = true;
    
    window.onscroll = function() {
        start();
    }
    
    function start() {
        if (window.scrollY > 200 && onlyOnce) {
            onlyOnce = false;
            if (clientsCounter && servicesCounter && doctorsCounter) {
                animateValue(clientsCounter, 0, clientsCounter.innerText, 3000);
                animateValue(servicesCounter, 0, servicesCounter.innerText, 3000);
                animateValue(doctorsCounter, 0, doctorsCounter.innerText, 3000);
            }
        }
    }
    
    function animateValue(obj, start, end, duration) {
        
        if (start === end) {
            return;
        }
        
        const range = end - start;
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const timer = setInterval(() => {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
});
// index page number count code end

const header = document.querySelector('.header');
const logoWhite = document.querySelector('.logo-white');
const logoBlack = document.querySelector('.logo-black');
const navLink = document.querySelectorAll('.nav-link');
const navLinkIcon = document.querySelector('.navbar-call-icon');
const navLinkIconBlack = document.querySelector('.navbar-call-icon-black');
const navLinkItem = document.querySelectorAll('.navbar-item-link');
let navMenuImgWhite = document.querySelector('.nav-menu-img-white');
let navMenuImgBlack = document.querySelector('.nav-menu-img-black');
let navItemActive = document.querySelector('.nav-item.active')

navLink.forEach(function(element) {
    element.style.color = 'white';
})

header.style.background = '#1C314E';
navMenuImgBlack.style.display = 'none'
navLinkIconBlack.style.display = 'none';
logoBlack.style.display = 'none';
window.addEventListener('scroll', (event) => {
    if (scrollY > 0) {
        logoWhite.style.display = 'none';
        logoBlack.style.display = 'block';
        
        navLink.forEach(function(element) {
            element.style.color = '#1c314e';
        })

        navLinkItem.forEach(function(el) {
            el.style.fontWeight = '600';
        })

        navLinkIcon.style.display = 'none';
        navLinkIconBlack.style.display = 'block';

        
        header.style.background = '#fff';
        
        
        
        navMenuImgWhite.style.display = 'none';
        navMenuImgBlack.style.display = 'block'
        
    } else {
        logoBlack.style.display = 'none';
        logoWhite.style.display = 'block';
        
        navLink.forEach(function(element) {
            element.style.color = 'white';
        })

        navLinkItem.forEach(function(el) {
            el.style.fontWeight = '300';
        })

        navLinkIcon.style.display = 'block';
        navLinkIconBlack.style.display = 'none';
        
        header.style.background = '#1C314E';
        
        navMenuImgWhite.style.display = 'block';
        navMenuImgBlack.style.display = 'none'
        
    }
})


// input value function start
function isInputString(evt) {
    const char = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(char))) {

    } else {
        evt.preventDefault();
    }
}

const formInput = document.getElementById('inputPhoneMask');
putMask(formInput);

function putMask(el) {
    if(el) {
        const phoneMask = IMask(el, {
            mask: '+{998} 00 000-00-00',
            lazy: false,
            placeholderChar: 'X'
        });
    }
}
// input value function end


const serviceInfoLinks = document.querySelectorAll('.service-button-link');
const serviceContenWrappers = document.querySelectorAll('.service-content-wrapper');

serviceInfoLinks.forEach(function(btn) {
    btn.addEventListener('click', e => {
        console.log(e.target.id);
        serviceContenWrappers.forEach(function(wrp) {
            console.log(wrp.dataset.target);
            if (e.target.id == wrp.dataset.target) {
                wrp.classList.add('active');
            } else {
                wrp.classList.remove('active');
            }
        })
    })
});
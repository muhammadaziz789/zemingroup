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
const headerIndex = document.querySelector('.header-index');
const logoWhite = document.querySelector('.logo-white');
const logoBlack = document.querySelector('.logo-black');
const navLink = document.querySelectorAll('.nav-link');
let navCallWhite = document.querySelector('.nav-call-white');
let navCallBlack = document.querySelector('.nav-call-black');
let navMenuImgWhite = document.querySelector('.nav-menu-img-white');
let navMenuImgBlack = document.querySelector('.nav-menu-img-black');
let navItemActive = document.querySelector('.nav-item.active')

navLink.forEach(function(element) {
    element.style.color = 'white';
})

header.style.background = '#1C314E';
navMenuImgBlack.style.display = 'none'
navCallBlack.style.display = 'none';
logoBlack.style.display = 'none';
window.addEventListener('scroll', (event) => {
    if (scrollY > 0) {
        logoWhite.style.display = 'none';
        logoBlack.style.display = 'block';
        
        navLink.forEach(function(element) {
            element.style.color = '#1c3143';
            element.style.fontWeight = '600';
        })
        
        header.style.background = '#fff';
        headerIndex.classList.remove('active');
        
        
        navCallWhite.style.display = 'none';
        navCallBlack.style.display = 'block';
        
        navMenuImgWhite.style.display = 'none';
        navMenuImgBlack.style.display = 'block'
        
    } else {
        logoBlack.style.display = 'none';
        logoWhite.style.display = 'block';
        
        navLink.forEach(function(element) {
            element.style.color = 'white';
        })
        
        header.style.background = '#1C314E';
        headerIndex.classList.add('active');
        
        navCallBlack.style.display = 'none';
        navCallWhite.style.display = 'block';;
        
        navMenuImgWhite.style.display = 'block';
        navMenuImgBlack.style.display = 'none'
        
    }
})


// main text writting animation
let dataText = [`Biz bilan tashqi ko'rinishdagi
kamchiliklarni bartaraf eting!`];
function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
        document.querySelector(".main-title").innerHTML = text.substring(0, i+1) +'<span id="main-text" aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 80);
    }
    else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}
function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
            StartTextAnimation(0);
        }, 20000);
    }
    if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function(){
            StartTextAnimation(i + 1);
        });
    }
}
StartTextAnimation(0);


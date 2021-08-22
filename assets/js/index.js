const currentLocation = location.href;
const navItem = document.querySelectorAll('.nav-link');
const navItemLength = navItem.length;
for (let i = 0; i < navItemLength; i++) {
  if (navItem[i].href === currentLocation) {
    navItem[i].classList.add('active');
  }
}

gsap.from('.anim1', { opacity: 0, duration: 1, y: -100, stagger: 0.6 })
gsap.from('.main-content-bottom', { duration: 2, y: -200, opacity: 0})

const currentLocation = location.href;
const navItem = document.querySelectorAll('.nav-link');
const navItemLength = navItem.length;
for (let i = 0; i < navItemLength; i++) {
  if (navItem[i].href === currentLocation) {
    navItem[i].classList.add('active');
  }
}

var a = 0;
$(window).scroll(function() {
    
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
            
            {
                
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }
                
            });
        });
        a = 1;
    }
    
});

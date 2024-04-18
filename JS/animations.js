document.addEventListener("DOMContentLoaded", function () {
    var animateRight = document.querySelector(".animate-right");
    var animateLeft = document.querySelector(".animate-left");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 150 && scrollPosition < 1000) {
            animateRight.style.opacity = "1";
            animateRight.style.transform = "translateX(0)";
            animateLeft.style.opacity = "1";
            animateLeft.style.transform = "translateX(0)";
        } else {
            animateRight.style.opacity = "0";
            animateRight.style.transform = "translateX(100px)";
            animateLeft.style.opacity = "0";
            animateLeft.style.transform = "translateX(-100px)";
        }
    });
});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-shadow');
    } else {
        navbar.classList.remove('nav-shadow');
    }

    var sections = document.querySelectorAll('.section');
    var navbar = document.querySelector('.navbar');
    var links = navbar.querySelectorAll('.nav-link');

    sections.forEach(function (section) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        var scrollPosition = window.scrollY + navbar.offsetHeight;

        if (scrollPosition >= top && scrollPosition <= bottom) {
            for (var i = 0; i < links.length; i++) {
                links[i].classList.remove('active');
            }

            var targetLink = navbar.querySelector('a[href="#' + section.id + '"]');
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });

});

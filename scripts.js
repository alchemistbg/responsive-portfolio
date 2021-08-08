$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        if (this.scrollY > 500) {
            $('.scroll-btn-up').addClass('show');
        } else {
            $('.scroll-btn-up').removeClass('show');
        }
    });

    //slide script
    // $('.scroll-btn-up').click(function () {
    //     $('html').animate({ scrollTop: 0 });
    // });

    //toggle menu/navbar
    $('.menu-btn, .menu-btn-nav').click(() => {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn').toggleClass('active');
        $('.menu-btn-nav').toggleClass('active');

        /* This code doesn't work because FA replace i tag with SVG and thus making this selector invalid:
            $('.menu-btn i').toggleClass('active');
            */
        // $('.menu-btn .icon').toggleClass('active');
    });

    //typed script
    const typed1 = new Typed(".typing-1", {
        strings: ["YouTuber", "Developer", "Blogger", "Freelancer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typed2 = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Freelancer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1024: {
                items: 3,
                nav: false
            }
        }
    });
});
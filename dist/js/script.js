$(document).ready(function() {
    $('.reviews__carousel').slick({
        speed: 200,
        swipe: false,
        /*     adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',

        responsive: [{
                breakpoint: 991,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    dots: true,
                    arrows: false
                }
            }

        ]

    });
});
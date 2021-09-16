// Variables

const hum = document.querySelector(".ham");
const nav = document.querySelector(".menu");


// Variables End


// Events
hum.addEventListener("click", () => {
    hum.classList.toggle("open");
    nav.classList.toggle("open");
})

// Events End


// Slick 
$(document).on('ready', () => {
    $('.center').slick({
        // centerMode: true,
        centerPadding: '90px',
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed: 3000,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                    centerMode: true,
                }
            }

        ]
    });

    $('.funder').slick({
        // centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        infinite: true,
        prevArrow: ".btnPrev",
        nextArrow: ".btnNext",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '20px',
                    centerMode: true,
                }
            }

        ]
    });
})

// Slick End


// Accordion

const btns = document.querySelectorAll(".faq-qsn .title")
const ans = document.querySelectorAll(".faq-qsn .ans")
const imgs = [
    "bi-plus-lg",
    "bi-dash-lg"
]
for (let i = 0; i < btns.length; i++) {
    btns[i].children[1].classList.toggle(imgs[0])
    btns[i].addEventListener('click', () => {
        ans[i].classList.toggle('open')
        btns[i].children[1].classList.toggle(imgs[0])
        btns[i].children[1].classList.toggle(imgs[1])

    })

}

// Accordion End


$(window).on("load", function() {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');

    // if($('body').attr('data-sidebar-position') === "fixed") {
    //     $('.quixnav-scroll').slimscroll({
    //         position: "right",
    //         size: "5px",
    //         height: "100%",
    //         color: "transparent"
    //     });
    // }
});
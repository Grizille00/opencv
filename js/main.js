// Variables

const hum = document.querySelector(".ham");
const nav = document.querySelector(".menu");


// Variables End


// Events
hum.addEventListener("click", ()=>{
    hum.classList.toggle("open");
    nav.classList.toggle("open");
    controls.classList.toggle("open")
})

// Events End


// Slick 
$(document).on('ready',()=>{
    $('.center').slick({
        // centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll:1,
        // autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        infinite: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              centerPadding: '20px',
              centerMode:true,
            }
          }

        ]
        });

        $('.funder').slick({
            // centerMode: true,
            centerPadding: '60px',
            slidesToShow: 4,
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:3000,
            arrows:true,
            infinite: true,
            prevArrow:".btnPrev",
            nextArrow:".btnNext",
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  centerPadding: '10px',
                  centerMode:true,
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
    "img/Icon feather-plus.png",
    "img/Icon feather-minus.png"
]
for (let i = 0; i < btns.length; i++) {
    btns[i].children[1].children[0].setAttribute('src',imgs[0])
    btns[i].addEventListener('click',()=>{
        ans[i].classList.toggle('open')
        if(btns[i].children[1].children[0].getAttribute('src') == imgs[0]) {
            btns[i].children[1].children[0].setAttribute('src',imgs[1])
        } else{
            btns[i].children[1].children[0].setAttribute('src',imgs[0])
        }
    })
    
}

// Accordion End
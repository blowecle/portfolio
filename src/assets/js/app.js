import gsap from 'gsap';
import Swiper from 'swiper';

const bar = document.querySelector('.loading__bar--inner');
const counter_number = document.querySelector('.loading__counter--number');
let count = 0;




let barInterval = setInterval(() => {
    bar.style.width = count + '%';
    counter_number.innerHTML = count + '%';
    count++;
    if (count > 100) {
        clearInterval(barInterval);
        gsap.to('.loading',{
            delay: 2,
            zIndex: 1,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
        })
        gsap.to('.loading__bar',{
            duration: 5,
            rotate: "90deg",
            left: "1000%",
            top: "-600%",
        });
        gsap.to('.loading__text,.loading__counter',{
            duration: .5,
            opacity: 0
        });
        gsap.to('.loading__box',{
            duration: .5,
            borderRadius: "50%",
            borderColor: "#6cff8d",
            height: "500px",
            width: "500px"
        })
        gsap.to('.loading__svg', {
            duration: 6,
            opacity: 1,
        })
        gsap.to('.loading__svg', {
            duration: 1,
            rotate: "360deg",
        })
        gsap.to('.loading__box',{
            delay: 1,
            duration: .3,
            borderWidth: 0,
        })
        gsap.to('.loading', {
            delay: 2,
            duration: 2,
            background: 'transparent',
        })
    }

}, 30);

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
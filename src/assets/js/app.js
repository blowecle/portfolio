import gsap from 'gsap';

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
            delay: 4,
            zIndex: 1,
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
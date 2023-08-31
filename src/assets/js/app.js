const bar = document.querySelector('.loading__bar--inner');
const counter_number = document.querySelector('.loading__counter--number');
let count = 0;


let barInterval = setInterval(() => {
    bar.style.width = count + '%';
    counter_number.innerHTML = count + '%';
    count++;
    if (count > 100) {
        clearInterval(barInterval);
    }

}, 30);
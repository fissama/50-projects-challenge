const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let loading = 0;


const blurring = () => {
    loading++;
    console.log(loading);
    if (loading > 99) {
        clearInterval(int);
    }
    
    loadText.innerHTML = `${loading}%`;
    loadText.style.opacity = scale(loading, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
};

const scale = (num, in_min, in_max, out_min, out_max) =>
((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

let int = setInterval(blurring, 30);
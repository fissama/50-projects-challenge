const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
    let triggerBottom = window.innerHeight / 5 * 4;
    console.log(triggerBottom);
    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', checkBoxes);

checkBoxes();
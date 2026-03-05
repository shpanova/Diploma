import "./index.css";

console.log("JS работает");


document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.querySelector('.A_button_border_1');
    const block1 = document.querySelector('.v');
    const block2 = document.querySelector('.n');

    if (btn1 && block1 && block2) {
        btn1.addEventListener('click', (e) => {
            e.preventDefault();
            block1.style.display = 'none';
            btn1.style.display = 'none';
            block2.style.display = 'block';
        });
    } else {
        console.log("Ожидаем появления элементов на странице...");
    }

    const btn2 = document.querySelector('.A_button_border_2');
    const block3 = document.querySelector('.o');

    if (btn2 && block2 && block3) {
        btn2.addEventListener('click', (e) => {
            e.preventDefault();
            block2.style.display = 'none';
            btn2.style.display = 'none';
            block3.style.display = 'block';
        });
    } else {
        console.log("Ожидаем появления элементов на странице...");
    }


    const btn3 = document.querySelector('.A_button_border_3');
    const block4 = document.querySelector('.k');

    if (btn3 && block3 && block4) {
        btn3.addEventListener('click', (e) => {
            e.preventDefault();
            block3.style.display = 'none';
            btn3.style.display = 'none';
            block4.style.display = 'block';
        });
    } else {
        console.log("Ожидаем появления элементов на странице...");
    }


});


// v n o k
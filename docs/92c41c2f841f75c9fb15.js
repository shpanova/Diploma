import "./index.css";
console.log("JS работает");
document.addEventListener('DOMContentLoaded', function () {
  var btn1 = document.querySelector('.A_button_border_1');
  var block1 = document.querySelector('.v');
  var block2 = document.querySelector('.n');
  if (btn1 && block1 && block2) {
    btn1.addEventListener('click', function (e) {
      e.preventDefault();
      block1.style.display = 'none';
      btn1.style.display = 'none';
      block2.style.display = 'block';
    });
  } else {
    console.log("Ожидаем появления элементов на странице...");
  }
  var btn2 = document.querySelector('.A_button_border_2');
  var block3 = document.querySelector('.o');
  if (btn2 && block2 && block3) {
    btn2.addEventListener('click', function (e) {
      e.preventDefault();
      block2.style.display = 'none';
      btn2.style.display = 'none';
      block3.style.display = 'block';
    });
  } else {
    console.log("Ожидаем появления элементов на странице...");
  }
  var btn3 = document.querySelector('.A_button_border_3');
  var block4 = document.querySelector('.k');
  if (btn3 && block3 && block4) {
    btn3.addEventListener('click', function (e) {
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
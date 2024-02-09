// const players = document.querySelectorAll('.players__list');
// const playersCount = document.querySelector('.players__slide-count');
//
// const leftArrow = document.querySelector('.players__button-back');
// const rightArrow = document.querySelector('.players__button-next');
//
//
// let currentSlide = 0;
// let countOfSlides = 6;
//
//
// leftArrow.addEventListener('click', () => {
//     currentSlide = (currentSlide - 1 + countOfSlides ) % countOfSlides;
//     changePlayersSlide(currentSlide);
//     // console.log('<' + currentSlide);
// });
//
// rightArrow.addEventListener('click', () => {
//   currentSlide = (currentSlide + 1) % countOfSlides;
//   changePlayersSlide(currentSlide);
//   // console.log('>' + currentSlide);
// });
//
// function changePlayersSlide (slide) {
//   transform = "translateX(" + (0 - (slide * (500 + 335))) + "px)";
//   players[0].style.transform = transform;
//   playersCount.textContent = currentSlide + 1;
// }

const players = document.querySelectorAll('.players__list');
const playersCount = document.querySelector('.players__slide-count');

const leftArrow = document.querySelector('.players__button-back');
const rightArrow = document.querySelector('.players__button-next');

let currentSlide = 0;
let countOfSlides = 6;

function updateSlides() {
  const screenWidth = window.innerWidth;

  // Пересчитываем количество слайдов в зависимости от ширины экрана
  if (screenWidth >= 1366) {
    countOfSlides = 2;
  } else {
    countOfSlides = 6;
  }

  // Обновляем текущий слайд, чтобы он не выходил за пределы нового количества слайдов
  currentSlide = Math.min(currentSlide, countOfSlides - 1);

  changePlayersSlide();
}

window.addEventListener('resize', updateSlides);

leftArrow.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + countOfSlides) % countOfSlides;
  changePlayersSlide();
});

rightArrow.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % countOfSlides;
  changePlayersSlide();
});

function changePlayersSlide() {
  const slideMultiplier = window.innerWidth >= 1366 ? 3 : 1;

  if (window.innerWidth >= 1366) {
    const transformValue = `translateX(${-currentSlide * 1222}px)`;
    players[0].style.transform = transformValue;
    playersCount.textContent = currentSlide * slideMultiplier + 3;
  } else {
    const transformValue = `translateX(${-currentSlide * (500 * slideMultiplier + 335)}px)`;
    players[0].style.transform = transformValue;
    playersCount.textContent = currentSlide * slideMultiplier + 1;
  }
}

// Инициализация при загрузке страницы
updateSlides();

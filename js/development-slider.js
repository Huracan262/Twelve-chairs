const cards = document.querySelectorAll('.development__card');
const arrowBack = document.querySelector('.development__buttons-item:first-child button');
const arrowNext = document.querySelector('.development__buttons-item:last-child button');
const intermediateButtons = document.querySelectorAll('.development__buttons-item:not(:first-child):not(:last-child) button');

arrowBack.addEventListener('click', () => changeSlide(-1));
arrowNext.addEventListener('click', () => changeSlide(1));

intermediateButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    cards.forEach(card => card.classList.remove('development__card--current'));
    cards[index].classList.add('development__card--current');
    updateIntermediateButtons(index);
  });
});

function changeSlide(direction) {
  const currentIndex = Array.from(cards).findIndex(card => card.classList.contains('development__card--current'));
  const newIndex = currentIndex + direction;

  if (newIndex >= 0 && newIndex < cards.length) {
    cards[currentIndex].classList.remove('development__card--current');
    cards[newIndex].classList.add('development__card--current');
    updateIntermediateButtons(newIndex);
  }
}

function updateIntermediateButtons(currentIndex) {
  intermediateButtons.forEach((button, index) => {
    button.parentElement.classList.remove('development__buttons-item--current');
  });

  intermediateButtons[currentIndex].parentElement.classList.add('development__buttons-item--current');

  enableDisableButtons();
}

function enableDisableButtons() {
  const currentIndex = Array.from(cards).findIndex(card => card.classList.contains('development__card--current'));
  arrowBack.disabled = currentIndex === 0;
  arrowNext.disabled = currentIndex === cards.length - 1;
}

enableDisableButtons();

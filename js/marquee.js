const originalList = document.querySelector('.running-line__list');
runningLineContainer = document.querySelectorAll('.running-line');

for (let i = 0; i < runningLineContainer.length; i++) {
  const clonedList = originalList.cloneNode(true);
  runningLineContainer[i].appendChild(clonedList);
}



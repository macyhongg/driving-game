var $car = document.querySelector('img');

document.addEventListener('keydown', turn);

function turn(e) {
  if (e.key === 'ArrowDown') {
    $car.style.transform = 'rotate(270deg)';
  } else if (e.key === 'ArrowLeft') {
    $car.style.transform = 'rotate(0deg)';
  } else if (e.key === 'ArrowUp') {
    $car.style.transform = 'rotate(90deg)';
  } else if (e.key === 'ArrowRight') {
    $car.style.transform = 'rotate(180deg)';
  }
}

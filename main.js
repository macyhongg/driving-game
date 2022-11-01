var $car = document.querySelector('img');

// Turn the car
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

// Data
var coordX = $car.offsetLeft;
// var coordY = $car.offsetTop;

// Start the car
var clear;
document.addEventListener('keydown', go);
function go(e) {
  if (e.key === ' ') {
    clear = setInterval(move, 16);
  }
}

function move() {
  coordX += 0.75;
  $car.style.left = `${coordX}%`;
  if (coordX > 100) {
    clearInterval(clear);
    coordX = 0;
    $car.style.left = '0%';
  }
}

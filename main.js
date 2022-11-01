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
document.addEventListener('keydown', go);
function go(e) {
  if (e.key === ' ') {
    // console.log(coordX);
    setInterval(() => {
      coordX += 20;
      $car.style.left = `${coordX}px`;
    }, 16);

  }
}

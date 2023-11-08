function getRandomDiscount() {
  const random = Math.random();
  if (random < 0.67) {
    return 0; // 67% вероятность 0% скидки
  } else {
    return 50; // 33% вероятность 50% скидки
  }
}

document.getElementById("door1").addEventListener("click", function () {
  const door = document.getElementById("door1");
  door.classList.add("open");
  const discount = getRandomDiscount();
  setTimeout(() => {
    alert(`Вы выиграли ${discount}% скидки!`);
  }, 500); // Меняйте время анимации на значение, соответствующее длительности анимации в CSS
});

document.getElementById("door2").addEventListener("click", function () {
  const door = document.getElementById("door2");
  door.classList.add("open");
  const discount = getRandomDiscount();
  setTimeout(() => {
    alert(`Вы выиграли ${discount}% скидки!`);
  }, 500);
});

document.getElementById("door3").addEventListener("click", function () {
  const door = document.getElementById("door3");
  door.classList.add("open");
  const discount = getRandomDiscount();
  setTimeout(() => {
    alert(`Вы выиграли ${discount}% скидки!`);
  }, 500);
});

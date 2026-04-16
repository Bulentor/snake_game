const addNewFood = () => {
  const cordsNewFood = _getFreeSpace();

  if (cordsNewFood) {
    state.food.didAte = false;
    state.food.apples.x = cordsNewFood.x;
    state.food.apples.y = cordsNewFood.y;
  }
};


const _getRandomPosition = (num) => {
  return Math.floor(Math.random() * num);
};

const _getFreeSpace = () => {
  const { snake, food, level, maps } = state;
  const map = maps[`map${level}`];
  
  if (!food.didAte) return false;

  let x, y, isOccupied;

  do {
    isOccupied = false;
    x = _getRandomPosition(row);
    y = _getRandomPosition(row);

    if (snake.tail.some(t => t.x === x && t.y === y)) isOccupied = true;

    if (!isOccupied && map.cords.some(m => m.x === x && m.y === y)) isOccupied = true;

  } while (isOccupied);

  return { x, y };
};
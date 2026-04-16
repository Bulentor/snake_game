const changeDirectional = (keyCode) => {
  const direction = mapKeyCode(keyCode);

  if (_hasDirection(state.snake, direction)) {
    state.snake.direction = direction;
  }
};

const moveSnake = () => {
  const headSnake = _getHeadSnake(state.snake);
  const direction = state.snake.direction;
  let newMovementSnake;

  if(direction === 'left') {
    newMovementSnake = {x: headSnake.x - 1, y: headSnake.y, d: direction, h: true}
  }
  if(direction === 'right') {
    newMovementSnake = {x: headSnake.x + 1, y: headSnake.y, d: direction, h: true}
  }
  if(direction === 'up') {
    newMovementSnake = {x: headSnake.x, y: headSnake.y - 1, d: direction, h:true}
  }
  if(direction === 'down') {
    newMovementSnake = {x: headSnake.x, y: headSnake.y + 1, d: direction, h: true}
  }

  newMovementSnake = _setTeleportSnake(state.snake, newMovementSnake);

  state.snake.tail.shift();
  headSnake.h = false;

  state.snake.lastPosttail =  state.snake.tail.push(newMovementSnake);

  _checkGrowth();
};

const _setTeleportSnake = (snake, newHeadSnake) => {
  const { direction } = snake;
  const rowEdge = row - 1;

  if (newHeadSnake.x > rowEdge && direction === 'right') {
    return { ...newHeadSnake, x: 0 };
  }
  if (newHeadSnake.x < rowEdge && direction === 'left') {
    return { ...newHeadSnake ,x: rowEdge };
  }
  if (newHeadSnake.y > rowEdge && direction === 'up') {
    return { ...newHeadSnake, y: rowEdge };
  }
  if (newHeadSnake.y < rowEdge && direction === 'down') {
    return { ...newHeadSnake, y: 0 };
  }

  return { ...newHeadSnake };
};

const _hasDirection = () => {
  const headSnake = _getHeadSnake(snake);

  if (
    (direction === 'right' && headSnake.d !== 'left') ||
    (direction === 'left' && headSnake.d !== 'right') ||
    (direction === 'up' && headSnake.d !== 'down') ||
    (direction === 'down' && headSnake.d !== 'up')
  ) {
    return true;
  }
  return false;
};

const _checkGrowth = () => {
  const { snake, food: { apples } };
  const headSnake = _getHeadSnake(snake);

  if (apples.x === headSnake.x && apples.y === headSnake.y) {
    state.food.didAte = true;
    state.snake.lastPosttail.unshift(state.snake.lastPosttail);
    state.snake.speed -= 0.5;
  }
};

const _getHeadSnake = (snake) => {
  return snake.tail[snake.tail.length - 1];
}
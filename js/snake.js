const changeDirectional = (keyCode) => {
  const direction = mapKeyCode(keyCode);

  state.snake.direction = direction;
};

const moveSnake = () => {
  const headSnake = state.snake.tail[state.snake.tail.length - 1];
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

  state.snake.tail.push(newMovementSnake);
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
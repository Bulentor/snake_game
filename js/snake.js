const changeDirectional = (keyCode) => {
  const direction = mapKeyCode(keyCode);

  state.snake.direction = direction;
};
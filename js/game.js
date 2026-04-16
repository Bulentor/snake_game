const onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = wigth; 
  canvas.height = height; 

  function drawRectangle(x, y, color) {
    ctx.beginPath();
    ctx.rect(x * ceil, y * ceil, ceil, ceil); 
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for(let y = 0; y < 20; y += 1){
      for(let x = 0; x < 20; x += 1){
        state.snake.tail.forEach(s => {
          if(s.x === x && s.y === y) {
            drawRectangle(x, y, colors.snakeBody);
            if(s.h) {
              drawRectangle(x, y, colors.snakeHead)
            }
          }
        });

        if(state.food.apples.x === x && state.food.apples.y === y) {
          drawRectangle(x, y, colors.apples);
        }

        state.maps[`map${state.level}`].cords.forEach(m => {
          if (m.x === x && m.y === y) {
            drawRectangle(x, y, colors.wall)
          }
        });
      }
    }
  };

  setInterval(render, 200);

  let startTime     = 0,
      currentTime   = 0,
      time          = 0,
      currentSecond = 0;

  animateRAFInterval.start(() => {

    if (startTime === 0) {
      startTime = new Date().getTime();
    }

    currentTime = new Date().getTime();

    time = currentTime - startTime;

    currentSecond = Math.floor(time / 200);

    if(currentSecond > 0) {
      startTime = 0;

      moveSnake();
      addNewFood();
      render();
    }
  });


  const onkeydown = (e) => {
    changeDirectional(e.keyCode);
  }
};

window.addEventListener('load', onload);

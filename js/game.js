const { cloneElement } = require("react");

const onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = wigth; 
  canvas.height = height; 

  function drawRectangle(x, y, color, ceil1 = ceil, ceil2 = ceil) {
    ctx.beginPath();
    ctx.rect(x * ceil, y * ceil, ceil1, ceil2); 
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  const _renderSnake = (snake, x, y) => {
      snake.tail.forEach(s => {
          if(s.x === x && s.y === y) {
            drawRectangle(x, y, colors.snakeBody, ceil + board.height);
            if(s.h) {
              drawRectangle(x, y, colors.snakeHead)
            }
          }
        });
  };

  const _renderFood = (food, x, y) => {
    if(food.apples.x === x && food.apples.y === y) {
      drawRectangle(x, y, colors.apples, ceil + board.height);
    }
  };

  const _renderMap = (maps, x, y) => {
    maps.cords.forEach(m => {
      if (m.x === x && m.y === y) {
          drawRectangle(x, y, colors.wall, ceil + board.height)
      }
    });
  };

  const _renderScoreBoard = (score, level) => {
    drawRectangle(0, 0, colors.popup, board.width, board.height);

    ctx.fillStyle       = colors.text;
    ctx.font            = board.font;
    ctx.textAlign       = 'Left';
    ctx.fillBaseLine    = 'top';
    ctx.fillText(score, board.textScore.x, board.textScore.y);

    ctx.fillStyle = colors.apples;
    ctx.fillRect(board.apples.x, board.apples.y, ceil, ceil)

    ctx.fillStyle       = colors.text;
    ctx.font            = board.font;
    ctx.textAlign       = 'left';
    ctx.fillText(`Level: ${level}`, board.textLevel.x, board.textLevel.y);
  };

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const { snake, food, maps, level, score } = state;
    
    for(let y = 0; y < 20; y += 1){
      for(let x = 0; x < 20; x += 1){

        _renderSnake(snake, x, y);

        _renderFood(food, x, y);

        _renderMap(maps[`map${level}`], x, y);

        state.maps[`map${state.level}`].cords.forEach(m => {
          if (m.x === x && m.y === y) {
            drawRectangle(x, y, colors.wall)
          }
        });
      }
    }

    _renderScoreBoard(score, level);
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

    currentSecond = Math.floor(time /state.snake.speed);

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

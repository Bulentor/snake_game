const onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = wigth;
  canvas.heigth = height;

  function drawRectangle(x, y, color) {
    ctx.beginPath();
    ctx.rect(x * 30, y * 30, 30, 30);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  const rengerGame = () => {
    for(let y = 0; y < 20; y += 1){
      for(let x = 0; x < 20; x += 1){
        drawRectangle(x, y, 'red')
      }
    }

    const renderScene = setInterval(render, 200);
  };
  renderGame();
}

window.addEventListener('load', onload);
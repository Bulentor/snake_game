const onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.wigth = wigth;
  canvas.height = height;

  function drawRectangle(x, y, color) {
    ctx.beginPath();
    ctx.rect(x * 30, y * 30, 30, 30);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  const renderGame = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let y = 0; y < 20; y += 1){
      for(let x = 0; x < 20; x += 1){
        drawRectangle(x, y, 'red')
      }
    }

    const renderScene = setInterval(renderGame, 200);
  };
};

window.addEventListener('load', onload);
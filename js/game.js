const onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = wigth;
  canvas.heigth = height;

  const rengerGame = () => {
    for(let y = 0; y < 20; y += 1){
      for(let x = 0; x < 20; x += 1){
        //coordinate
        ctx.fillStyle = 'red';
        ctx.rect(x * 30, y * 30, 30, 30);
      }
    }
  };
  renderGame();
}

window.addEventListener('load', onload);
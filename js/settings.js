let wigth, height, board, row, ceil, colors;

wigth = 600;

board = {
  wigth,
  height: 60,
  font: 'norma 25px Arial, sans-serif',
  textScore: {
    x: 60,
    y: 19
  },
  textLevel: {
    x: 500,
    y: 19
  },
  apples: {
    x: 15,
    y: 15
  }
};

height = wigth + board.height;

ceil = 30;

row = wigth / ceil;

colors = {
  snakeHead: '#00ffff',
  snakeBody: '#1fb9dd',
  apples: 'red',
  wall: '#425874',
  text: '#000000',
  popup: '#e0cd1e'
}
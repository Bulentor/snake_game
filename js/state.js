const state = {
  snake: {
    tail: [
      {x: 1, y: 1, d: 'right', h: false},
      {x: 2, y: 1, d: 'right', h: false},
      {x: 3, y: 1, d: 'right', h: false},
      {x: 4, y: 1, d: 'right', h: true},
    ],
    direction: 'right',
    lastPosttail: {},
    speed: 300
  },
  food: {
    didAte: true,
    apples: {}
  },
  level: 1,
  maps: {
    'map1': map1,
    'maps2': map2,
    'map3': map3,
    'map4': map4
  }
}
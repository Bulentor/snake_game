const map1 = {
  cord: [],
  competed: 200
}

const map2 = {
  cords: [],
  competed: 200
}

const map3 = {
  cord: [],
  competed: 200
}

const map4 = {
  cord: [],
  competed: 200
}

const generateMaps = (map, axis, from, to, numRestAxis) => {
  const countInteration = to - from;
  const getRestAxis = (axis === 'x') ? 'y' : 'x';
  let cords;

  for(let i = 0; i < countInteration; i += 1) {
    cords = { [axis]: from + i, [getRestAxis]: numRestAxis };
    map.cord.push(cords);
  }

  map.competed = map.competed - countInteration;
};

generateMaps(map2, 'x', 5, 14, 4);
generateMaps(map2, 'x', 3, 16, 9);
generateMaps(map2, 'x', 3, 16, 10);
generateMaps(map2, 'x', 5, 14, 15);
generateMaps(map2, 'x', 5, 14, 4);

generateMaps(map3, 'x', 0, 20, 0);
generateMaps(map3, 'y', 1, 20, 19);
generateMaps(map3, 'x', 0, 19, 19);
generateMaps(map3, 'y', 1, 19, 0);
generateMaps(map3, 'x', 2, 5, 2);
generateMaps(map3, 'x', 2, 5, 3);
generateMaps(map3, 'x', 2, 5, 4);
generateMaps(map3, 'x', 2, 5, 15);
generateMaps(map3, 'x', 2, 5, 16);
generateMaps(map3, 'x', 2, 5, 17);
generateMaps(map3, 'x', 15, 18, 15);
generateMaps(map3, 'x', 15, 18, 16);
generateMaps(map3, 'x', 15, 18, 17);
generateMaps(map3, 'x', 15, 18, 2);
generateMaps(map3, 'x', 15, 18, 3);
generateMaps(map3, 'x', 15, 18, 4);

generateMaps(map4, 'x', 0, 20, 0);
generateMaps(map4, 'y', 2, 18, 19);
generateMaps(map4, 'x', 0, 20, 19);
generateMaps(map4, 'y', 2, 18, 0);
generateMaps(map4, 'x', 7, 13, 3);
generateMaps(map4, 'x', 7, 13, 4);
generateMaps(map4, 'x', 7, 13, 15);
generateMaps(map4, 'x', 7, 13, 16);
generateMaps(map4, 'y', 7, 13, 15);
generateMaps(map4, 'y', 7, 13, 16);
generateMaps(map4, 'y', 7, 13, 4);
generateMaps(map4, 'y', 7, 13, 3);
generateMaps(map4, 'x', 7, 13, 7);
generateMaps(map4, 'x', 7, 13, 8);
generateMaps(map4, 'x', 7, 13, 9);
generateMaps(map4, 'x', 7, 13, 10);
generateMaps(map4, 'x', 7, 13, 11);
generateMaps(map4, 'x', 7, 13, 12);
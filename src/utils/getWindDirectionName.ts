export const getWindDirectionName = (deg: number) => {
  let directionName = '';

  if ((deg >= 0 && deg <= 23) || (deg >= 337 && deg <= 360)) {
    directionName = 'N';
  } else if (deg >= 24 && deg <= 68) {
    directionName = 'NE';
  } else if (deg >= 69 && deg <= 113) {
    directionName = 'E';
  } else if (deg >= 114 && deg <= 158) {
    directionName = 'SE';
  } else if (deg >= 159 && deg <= 203) {
    directionName = 'S';
  } else if (deg >= 204 && deg <= 248) {
    directionName = 'SW';
  } else if (deg >= 249 && deg <= 293) {
    directionName = 'W';
  } else if (deg >= 294 && deg <= 336) {
    directionName = 'NW';
  }

  return directionName;
};

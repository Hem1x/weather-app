export const getValidTemperature = (temperature: number) => {
  if (temperature > 0) {
    return '+' + temperature + '°С';
  }

  return temperature + '°С';
};

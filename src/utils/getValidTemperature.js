export const getValidTemperature = (temperature) => {
    if (temperature > 0) {
        return '+' + temperature + '°С'
    }

    return temperature + '°С'
}
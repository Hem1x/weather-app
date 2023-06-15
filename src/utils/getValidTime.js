export const getValidTime = (timeUNIX) => {
    const validTime = new Date(timeUNIX * 1000)

    const hours = getValidTimeFormat(validTime.getHours())
    const minutes = getValidTimeFormat(validTime.getHours())

    return `${hours}:${minutes}`
}

const getValidTimeFormat = (time) => {
    return (time < 10) ? ("0" + time) : (time)
}
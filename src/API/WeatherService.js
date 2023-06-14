import axios from "axios";

const API_KEY = "7c893bd9c3b455d85cf6db91e91dc325"

export default class WeatherService {
    static async getDataUS(city) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru`)
        return response.data
    } 

    static async getDataGeneral(city) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=ru`)
        return response.data
    }
}
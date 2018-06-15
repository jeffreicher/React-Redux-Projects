const API_KEY = 'e3f32ab3b05bd56f2be3b430f0e62d9a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
};
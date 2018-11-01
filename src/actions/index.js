
import axios from 'axios';

const API_KEY ='b3152515eadf968eb0b5fba7fc310344';
const ROOT_URL = 'https://samples.openweathermap.org/data/2.5/forecast?q=London,us&&appid=${API_KEY}';

export const PETCH_WEATHER = 'PETCH_WEATHER';


export function fetchWeather(cod) {
  const url = '${ROOT_URL}&{cod},us';
  const request = axios.get(url);

  return {
    type: PETCH_WEATHER,
    payload:request
  };
}

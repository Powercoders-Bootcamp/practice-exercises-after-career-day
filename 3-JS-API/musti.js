const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind_speed');

const cities = {
    'Zurich': { latitude: 47.3769, longitude: 8.5417 },
    'Geneva': { latitude: 46.2044, longitude: 6.1432 },
    'Basel': { latitude: 47.5596, longitude: 7.5886 },
    'Lausanne': { latitude: 46.5197, longitude: 6.6323 },
    'Bern': { latitude: 46.9480, longitude: 7.4474 },
    'Winterthur': { latitude: 47.4988, longitude: 8.7241 },
    'Lucerne': { latitude: 47.0502, longitude: 8.3093 },
    'St. Gallen': { latitude: 47.4245, longitude: 9.3767 },
    'Lugano': { latitude: 46.0037, longitude: 8.9511 },
    'Biel': { latitude: 47.1320, longitude: 7.2445 },
    'Thun': { latitude: 46.7570, longitude: 7.6296 },
    'Köniz': { latitude: 46.9225, longitude: 7.4151 },
    'La Chaux-de-Fonds': { latitude: 47.0999, longitude: 6.8259 },
    'Schaffhausen': { latitude: 47.6973, longitude: 8.6349 },
    'Fribourg': { latitude: 46.8024, longitude: 7.1517 },
    'Chur': { latitude: 46.8508, longitude: 9.5329 },
    'Neuchâtel': { latitude: 46.9896, longitude: 6.9293 },
    'Vernier': { latitude: 46.2170, longitude: 6.0848 },
    'Uster': { latitude: 47.3479, longitude: 8.7209 },
    'Sion': { latitude: 46.2330, longitude: 7.3606 },
    'Lancy': { latitude: 46.1881, longitude: 6.1159 },
    'Emmen': { latitude: 47.0781, longitude: 8.3059 },
    'Rapperswil-Jona': { latitude: 47.2262, longitude: 8.8224 },
    'Yverdon-les-Bains': { latitude: 46.7785, longitude: 6.6412 },
    'Zug': { latitude: 47.1724, longitude: 8.5174 },
    'Montreux': { latitude: 46.4312, longitude: 6.9107 },
    'Frauenfeld': { latitude: 47.5581, longitude: 8.8985 },
    'Wil': { latitude: 47.4647, longitude: 9.0456 },
    'Sierre': { latitude: 46.2919, longitude: 7.5355 },
    'Glarus': { latitude: 47.0404, longitude: 9.0679 },
    'Bellinzona': { latitude: 46.1928, longitude: 9.0170 },
    'Olten': { latitude: 47.3495, longitude: 7.9034 },
    'Wetzikon': { latitude: 47.3273, longitude: 8.7975 }
  };
  

searchButton.addEventListener('click', getWeatherData);

function getWeatherData() {

  const city = cityInput.value;

  const url = ``;    /*I couldnt find right url*/

  fetch(url)
    .then(response => response.json())

}

const { Weather } = require('./weather');
const {UI} = require('./UI');

const ui = new UI();
const weather = new Weather('London','uk');

require('./index.css');

async function fetchWeather() {
    // weather.getWeather() -> recoge los datos de la API y devuelve un objeto json.
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data)
}

//Cuando se ejecute el boton, recogera los datos de los inputs, invalidara el refresh por defecto y cambiara la ciudad y el codigo.
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('c-code').value;
    console.log(city,countryCode);
    e.preventDefault();
    weather.changeLocation(city,countryCode);
    fetchWeather();
})

document.addEventListener('DOMContentLoaded', fetchWeather);
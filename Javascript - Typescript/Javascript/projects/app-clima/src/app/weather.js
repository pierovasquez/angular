// Pedira los datos del clima a la API que utilicemos.

export class Weather {


    constructor(city,countryCode) {
        this.apikey = 'f3e4ea4b87c84edd11cbf02d6aca36bf'
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`;
        // Fetch sirve para hacer peticiones al servidor. Es un metodo asincrono. Va a requerir tiempo su ejecucion
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }


    changeLocation(city,countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}
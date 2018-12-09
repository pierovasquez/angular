// Con este archivo, almacenaremos datos dentro del local storage. Por ejemplo, guardaremos la ultima ciudad
// solicitada para que cuando accedamos a la pagina, nos aparezca esta en vez de una por defecto.

export class Store {
    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'London';
        this.defaultCountry = 'uk';
    }

    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city'); 
        }

        if(localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountry;
        }else {
            this.countryCode = localStorage.getItem('countryCode');
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setLocationData(city,countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}
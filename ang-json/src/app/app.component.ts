import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Etiqueta se utilizara en el index.html
  templateUrl: './app.component.html', // Indica donde esta el archivo html que se desplegara en la etiqueta app-root
  styleUrls: ['./app.component.scss'] // Indica donde esta el archivo css "" ""
})
export class AppComponent {
  name: string = 'Ryan';
  age:number;
  addres: {
    street: string;
    city: string;
  }
  hobbies: string[];
  title = 'piero';

  constructor() {
    this.age = 28;
    this.addres = {
      street: '221 Street',
      city: 'London'
    }
    this.hobbies = ['swimming','read','write'];
  }
}

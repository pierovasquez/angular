import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-form2';
  topics = ['Angular', 'React', 'Vue'];

  log(firstName) {
    console.log(firstName);
  }
}

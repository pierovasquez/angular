import { Alumno } from './alumno';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ang-form2';
  topics = ['Angular', 'React', 'Vue'];
  languageHasError = true;

  userModel: User;
  ngOnInit() {
    this.userModel = new User();
    this.userModel.alumno = new Alumno();
  }

  log(firstName) {
    console.log(firstName);
  }

  validateLanguage(x) {
    console.log('blir');
    if (x === 'default') {
      this.languageHasError = true;
    } else {
      this.languageHasError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
  }
}

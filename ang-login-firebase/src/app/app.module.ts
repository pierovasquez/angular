import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Imports
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment} from '../environments/environment';

// Messages. import i --save angular2-flash-messages
import {FlashMessagesModule} from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

//Service
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlashMessagesModule
    
  ],
  providers: [AuthService, AuthGuard,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

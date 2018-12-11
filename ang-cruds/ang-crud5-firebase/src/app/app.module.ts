import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// Firebase
import { environment} from '../environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire'

//Services
import { CursoService } from './services/curso.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    AddCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

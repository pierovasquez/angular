import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NuevaRecetaComponent} from './components/nueva-receta/nueva-receta.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


// Existen 4 tipos de Guards, 
// canLoad -> se utiliza cuando estamos trabajando con easyloading. (Carga pausada, lenta)
// canDesactive -> se utiliza cuando no queremos que un usuario salga de determinada url
// canActiveChild -> Es parecida al canActive pero vigila tambien las subrutas. Por ejemplo,  /admin/(cualquier ruta). Vigila las subrutas de admin
// canActivate -> Si no esta logeado, no podra acceder a esas url

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nuevaReceta', component: NuevaRecetaComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

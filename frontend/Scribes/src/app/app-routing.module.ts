import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  
  {path: 'login',component: LoginComponent},
  {path: 'profil',component: ProfileComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**',component: NotFoundComponent},
]

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

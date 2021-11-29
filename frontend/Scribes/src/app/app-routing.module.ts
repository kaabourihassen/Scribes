import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'profil',component: ProfileComponent},
  {path: 'users',component: UsersListComponent},
  {path: 'users/:id',component: UserDetailsComponent},
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

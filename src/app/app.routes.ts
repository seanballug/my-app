import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home';
import { LoginComponent} from './comps/login/login';
import { ProfileComponent } from './comps/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent}
];
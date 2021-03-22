import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from '../../guards/auth/no-auth.guard';

import { LoginComponent } from './pages/login/login.page';
import { SignupComponent } from './pages/signup/signup.page';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

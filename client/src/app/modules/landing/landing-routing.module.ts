import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.page';
import { NoAuthGuard } from '../../guards/auth/no-auth.guard';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

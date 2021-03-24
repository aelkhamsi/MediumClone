import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateComponent } from './pages/create/create.component';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { MyArticlesComponent } from './pages/my-articles/my-articles.component';
import { SingleArticleComponent } from './pages/single-article/single-article.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'my-articles',
    component: MyArticlesComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'article/:id',
    component: SingleArticleComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

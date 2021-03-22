import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { CreateComponent } from './pages/create/create.component';
import { MyArticlesComponent } from './pages/my-articles/my-articles.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ArticleComponent,
    ArticleCardComponent,
    CreateComponent,
    MyArticlesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

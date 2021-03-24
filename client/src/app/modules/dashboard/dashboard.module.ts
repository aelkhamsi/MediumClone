import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { CreateComponent } from './pages/create/create.component';
import { MyArticlesComponent } from './pages/my-articles/my-articles.component';
import { CommentComponent } from './components/comment/comment.component';
import { SingleArticleComponent } from './pages/single-article/single-article.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ArticleComponent,
    ArticleCardComponent,
    CreateComponent,
    MyArticlesComponent,
    CommentComponent,
    SingleArticleComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }

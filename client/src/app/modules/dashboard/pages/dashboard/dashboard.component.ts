import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/articles/article.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CST } from '../../../../constants/ls';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/articles/comment.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  articles: any[];
  comments: any[];
  selectedArticle: any;
  commentForm: FormGroup;

  constructor(
    public router: Router, 
    public articleService: ArticleService,
    public commentService: CommentService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder, 
  ) {} 

  ngOnInit() {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required]
    })

    this.articleService.getAll()
      .subscribe((res) => {
        this.articles = res;
        this.selectedArticle = this.articles[0];
      }, (error) => {
        if (error.status == 500)
          this.openSnackBar("Internal Server error. Please try again later", "Error");
        else
          this.openSnackBar(error.errorMessage, "Error");
      })
    
    if (this.selectedArticle) {
      this.commentService.getByArticleId(this.selectedArticle.id)
        .subscribe((res) => {
          this.comments = res;
        }, (error) => {
          if (error.status == 500)
            this.openSnackBar("Internal Server error. Please try again later", "Error");
          else
            this.openSnackBar(error.errorMessage, "Error");
        })
    } 
  }

  logout() {
    localStorage.removeItem(CST.LS_LABEL_USER);
    localStorage.removeItem(CST.LS_LABEL_TOKEN);
    this.router.navigate(['landing']);
  } 

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onSelect(article: any): void {
    this.selectedArticle = article;
    this.commentService.getByArticleId(this.selectedArticle.id)
        .subscribe((res) => {
          this.comments = res;
          //console.log(this.comments);
        }, (error) => {
          if (error.status == 500)
            this.openSnackBar("Internal Server error. Please try again later", "Error");
          else
            this.openSnackBar(error.errorMessage, "Error");
        })
  }

  onComment(): void {
    let userId = JSON.parse(localStorage.getItem(CST.LS_LABEL_USER)).id;
    let articleId = this.selectedArticle.id;
    let comment = this.commentForm.value.comment;

    console.log(userId);
    console.log(articleId);
    console.log(comment);
  }

}

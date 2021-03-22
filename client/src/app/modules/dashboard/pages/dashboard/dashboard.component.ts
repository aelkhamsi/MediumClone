import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/articles/article.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CST } from '../../../../constants/ls';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  articles: any[];
  comments: any[] = [
    {
      author: "Achraf",
      content: "I really liked your essay. Good work"
    },
    {
      author: "Ismail",
      content: "I get your point but i don't agree with you in some points"
    },
    {
      author: "Imane",
      content: "I totally disagree with you, but i respect your point of view"
    }
  ];
  selectedArticle: any;
  commentForm: FormGroup;

  constructor(
    public router: Router, 
    public articleService: ArticleService,
    private _snackBar: MatSnackBar
  ) {} 

  ngOnInit() {

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
    console.log(this.selectedArticle);
  }

}

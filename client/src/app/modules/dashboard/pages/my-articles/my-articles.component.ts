import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/articles/article.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CST } from '../../../../constants/ls';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.scss']
})
export class MyArticlesComponent implements OnInit {
  articles: any[];
  selectedArticle: any;
  
  constructor(
    public router: Router, 
    public articleService: ArticleService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem(CST.LS_LABEL_USER));

    this.articleService.getByUserId(user.id)
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

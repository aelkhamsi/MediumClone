import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/articles/article.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CST } from '../../../../constants/ls';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username: string;
  articles: any[];
  selectedArticle: any;
  
  constructor(
    public router: Router, 
    public articleService: ArticleService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem(CST.LS_LABEL_USER));
    this.username = user.username;

    this.articleService.getAll()
      .subscribe((res) => {
        this.articles = res;
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

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  expandButtonToggle: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    if (this.activatedRoute.snapshot.params.id == undefined)
      this.expandButtonToggle = true;
      else 
      this.expandButtonToggle = false;
  }


  onExpand() {
    let articleId = this.article.id;
    this.router.navigate(['/article', articleId]);
  }

}
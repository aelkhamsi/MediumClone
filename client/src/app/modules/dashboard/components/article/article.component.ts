import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() title;
  @Input() author;
  @Input() date;
  @Input() content;

  constructor() { }

  ngOnInit() {
  }

}

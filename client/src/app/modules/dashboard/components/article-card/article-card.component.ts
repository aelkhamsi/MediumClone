import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() author: string;
  // @Input() date;

  constructor() { }

  ngOnInit() {
  }

}

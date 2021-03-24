import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CST } from 'src/app/constants/ls';
import { Article } from 'src/app/models/Article';
import { ArticleReadDto, ArticleWriteDto } from 'src/app/models/DTOs/ArticleDto';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  ARTICLE_URI: string = environment.ARTICLE_URI;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': ''
    })
  };

  constructor(private http: HttpClient) { }
  

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.ARTICLE_URI + "/article", this.httpOptions);
  }

  getById(id: number): Observable<Article[]> {
    return this.http.get<Article[]>(this.ARTICLE_URI + "/article/" + id, this.httpOptions);
  }

  getByUserId(id: number): Observable<Article[]> {
    return this.http.get<Article[]>(this.ARTICLE_URI + "/article/user/" + id, this.httpOptions);
  }

  addArticle(name: string, content: string): Observable<ArticleReadDto> {
    let user = JSON.parse(localStorage.getItem(CST.LS_LABEL_USER));

    let article: ArticleWriteDto = {name: name, content: content, userId: user.id}
    return this.http.post<ArticleReadDto>(this.ARTICLE_URI + "/article", article, this.httpOptions);
  }
  
}

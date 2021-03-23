import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CST } from 'src/app/constants/ls';

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
  

  getAll(): Observable<any> {
    return this.http.get<any>(this.ARTICLE_URI + "/article", this.httpOptions);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.ARTICLE_URI + "/article/" + id, this.httpOptions);
  }

  getByUserId(id: number): Observable<any> {
    return this.http.get<any>(this.ARTICLE_URI + "/article/user/" + id, this.httpOptions);
  }

  addArticle(name: string, content: string): any {
    let user = JSON.parse(localStorage.getItem(CST.LS_LABEL_USER));

    let article = {
      name: name,
      content: content,
      userId: user.id
    }
    return this.http.post<any>(this.ARTICLE_URI + "/article", article, this.httpOptions);
  }
  
}

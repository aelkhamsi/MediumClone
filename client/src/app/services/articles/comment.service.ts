import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CST } from 'src/app/constants/ls';

@Injectable()
export class CommentService {
  ARTICLE_URI: string = environment.ARTICLE_URI;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': ''
    })
  };

  getByArticleId(articleId: number): Observable<any> {
    return this.http.get<any>(this.ARTICLE_URI + '/comment/article/' + articleId, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}

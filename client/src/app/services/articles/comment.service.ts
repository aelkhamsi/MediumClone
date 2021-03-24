import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CST } from 'src/app/constants/ls';
import { CommentReadDto, CommentWriteDto } from 'src/app/models/DTOs/CommentDto';

@Injectable()
export class CommentService {
  ARTICLE_URI: string = environment.ARTICLE_URI;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': ''
    })
  };

  getByArticleId(articleId: number): Observable<Comment[]> {
    return this.http.get<any>(this.ARTICLE_URI + '/comment/article/' + articleId, this.httpOptions);
  }

  addComment(userId: number, articleId: number, comment: string): Observable<CommentReadDto>{
    let commentWriteDto: CommentWriteDto = {userId, articleId, comment}
    return this.http.post<CommentReadDto>(this.ARTICLE_URI + '/comment', commentWriteDto, this.httpOptions);
  }
  
  constructor(private http: HttpClient) { }
}

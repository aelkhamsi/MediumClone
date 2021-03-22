import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../../models/response-dto';
import { environment } from '../../../environments/environment';

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
    console.log("Get All");
    console.log(this.ARTICLE_URI);
    return this.http.get<any>(this.ARTICLE_URI + "/article", this.httpOptions);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.ARTICLE_URI + "/article/" + id, this.httpOptions);
  }
  
}

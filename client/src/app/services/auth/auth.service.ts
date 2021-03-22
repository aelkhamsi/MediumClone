import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../../models/response-dto';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //SERVER_URI: string = environment.SERVER_URI;
  SERVER_URI: string = environment.SERVER_URI;
  LOGIN_URL: string = "/login";  //1. it should be static...i guess
  SIGNUP_URL: string = "/signup";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': ''
    })
  };

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<any> { //2. ResponseDTO should have a generic type
    var data = {
      email,
      password
    }
    return this.http.post<any>(this.SERVER_URI + this.LOGIN_URL, data, this.httpOptions);
  }

  signup(username: string, email: string, password: string, role: string): Observable<any> {
    var data = {
      username,
      email,
      password,
      role
    }
    return this.http.post<any>(this.SERVER_URI + this.SIGNUP_URL, data, this.httpOptions);
  }
}

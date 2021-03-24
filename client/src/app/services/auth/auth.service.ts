import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginReadDto, LoginWriteDto } from 'src/app/models/DTOs/LoginDto';
import { SignupWriteDto } from 'src/app/models/DTOs/SignupDto';
import { User } from 'src/app/models/User';
import { CST } from 'src/app/constants/ls';

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


  login(email: string, password: string): Observable<LoginReadDto> {
    var data: LoginWriteDto = {email, password}
    return this.http.post<LoginReadDto>(this.SERVER_URI + this.LOGIN_URL, data, this.httpOptions);
  }

  signup(username: string, email: string, password: string, role: string): Observable<User> {
    var data: SignupWriteDto = {username, email, password, role}
    return this.http.post<User>(this.SERVER_URI + this.SIGNUP_URL, data, this.httpOptions);
  }

  getToken(): string {
    return localStorage.getItem(CST.LS_LABEL_TOKEN);
  }
}

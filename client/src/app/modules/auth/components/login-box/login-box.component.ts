import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../../../services/auth/auth.service";
import { ResponseDTO } from 'src/app/models/response-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CST } from '../../../../constants/ls';


@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {
  loginForm : FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router,
    private _snackBar: MatSnackBar ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      keepConnection: [false, Validators.required]
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onSubmit() {
    // currently, keepConnection field is not used
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((response: any) => {
        localStorage.setItem(CST.LS_LABEL_USER, JSON.stringify(response.user));
        localStorage.setItem(CST.LS_LABEL_TOKEN, response.access_token);

        this.router.navigate(['dashboard']);
      }, (error) => { // error is of type HttpErrorResponse
        this.openSnackBar(error.error.errorMessage, "Error");
        this.loginForm.reset();
      }); 
  }

}

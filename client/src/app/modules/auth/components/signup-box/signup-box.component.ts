import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';
import { ResponseDTO } from 'src/app/models/response-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-box',
  templateUrl: './signup-box.component.html',
  styleUrls: ['./signup-box.component.scss']
})
export class SignupBoxComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    public router: Router) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      keepConnection: [false, Validators.required]
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit() {
    this.authService.signup(this.signupForm.value.username, this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.role)
      .subscribe((response: any) => {
        this.openSnackBar("Registration successful!", "");
        this.router.navigate(['login'])
      }, (error) => { // error is of type HttpErrorResponse
        this.openSnackBar(error.error.errorMessage, "Error");
        this.signupForm.reset();
      });
  }

}

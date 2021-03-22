import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.page';
import { SignupComponent } from './pages/signup/signup.page';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { SignupBoxComponent} from './components/signup-box/signup-box.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    //pages
    LoginComponent,
    SignupComponent, 

    //components
    LoginBoxComponent,
    SignupBoxComponent, 
    HeaderComponent, 
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CST } from '../../constants/ls';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  
  constructor(
    public router: Router,
    public jwtHelper: JwtHelperService ) {} 

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token: string = localStorage.getItem(CST.LS_LABEL_TOKEN);

    if (!this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}

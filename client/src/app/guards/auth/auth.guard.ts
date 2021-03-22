import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CST } from '../../constants/ls';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( public jwtHelper: JwtHelperService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token: string = localStorage.getItem(CST.LS_LABEL_TOKEN);
    if (this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }


}


import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationHelpers } from '../helpers/Authhelpers';

@Injectable()
export class CheckoutGuard implements CanActivate {
  constructor(
    private authenticationHelper: AuthenticationHelpers,
    private router: Router
  ) {}

  canActivate() {
    if (this.authenticationHelper.get() != null &&this.authenticationHelper.get() != undefined){
      return true;

    }else{
      this.router.navigate(['/acessar-conta']);
    return false;
  }
}
}

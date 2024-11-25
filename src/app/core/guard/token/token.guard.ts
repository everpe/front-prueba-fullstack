import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthTokenService } from '@feature/login/shared/services/auth-token/auth-token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {

  constructor(
    private readonly authTokenService: AuthTokenService,
    private readonly router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      const token = this.authTokenService.getToken();

      if (!token) {
        return this.router.createUrlTree(['/login']);
      }

      return true;
  }


}

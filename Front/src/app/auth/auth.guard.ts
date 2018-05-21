import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { UserService } from '../services/users.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(protected router: Router, protected userService: UserService) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}



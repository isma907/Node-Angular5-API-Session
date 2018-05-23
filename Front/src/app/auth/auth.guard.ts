import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { UserService } from '../services/users.service'
import { AuthService } from '../services/auth.service'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private user: UserService,
    private auth: AuthService) {

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //debugger
    if (this.auth.isLoggedIn) {
      return true
    }
    return this.user.isLoggedIn().pipe(map(res => {
      if (res) {
        this.auth.setLoggedIn(true)
        return true
      } else {
        this.router.navigate(['login'])
        return false
      }
    }))
  }
}


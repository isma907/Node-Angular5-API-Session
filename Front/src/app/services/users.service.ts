import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user'
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';


interface isLoggedIn {
  status: boolean
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _apiUrl = "http://localhost:3000/api/users"
  constructor(private http: HttpClient,
    private route: Router) { }

  options = { withCredentials: true }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>(this._apiUrl + '/checkAuth/', this.options)
  }

  loginUser(user): Observable<User[]> {
    return this.http.post<User[]>(this._apiUrl + '/Login/', user, this.options)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._apiUrl, this.options)
  }

  addUser(user): Observable<User[]> {
    return this.http.post<User[]>(this._apiUrl + '/addUser/', user, this.options)
  }

  deleteUser(user): Observable<User[]> {
    return this.http.delete<User[]>(this._apiUrl + '/deleteUser/' + user['_id'], this.options)
  }

  getUserById(id): Observable<User[]> {
    return this.http.get<User[]>(this._apiUrl + '/getUserById/' + id, this.options)
  }

  updateUser(user: User): Observable<User[]> {
    return this.http.put<User[]>(this._apiUrl + '/updateUser/' + user['_id'], user, this.options)
  }

}



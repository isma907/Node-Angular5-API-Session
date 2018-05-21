import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl = "http://localhost:3000/api/users"
  constructor(private http: HttpClient) { }

  loginUser(user): Observable<User[]> {
    return this.http.post<User[]>(this._apiUrl + '/Login/', user, { withCredentials: true })
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._apiUrl, { withCredentials: true })
  }

  addUser(user): Observable<User[]> {
    return this.http.post<User[]>(this._apiUrl + '/addUser/', user)
  }

  deleteUser(user): Observable<User[]> {
    return this.http.delete<User[]>(this._apiUrl + '/deleteUser/' + user['_id'])
  }

  getUserById(id): Observable<User[]> {
    return this.http.get<User[]>(this._apiUrl + '/getUserById/' + id)
  }

  updateUser(user: User): Observable<User[]> {
    return this.http.put<User[]>(this._apiUrl + '/updateUser/' + user['_id'], user)
  }
}



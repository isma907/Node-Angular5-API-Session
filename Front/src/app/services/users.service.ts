import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _apiUrl = "http://localhost:3000/api/users"
  constructor(private http: HttpClient) { }

  loginUser(contacto): Observable<Contacto[]> {
    return this.http.post<Contacto[]>(this._apiUrl + '/Login/', contacto)
  }

  getUsers(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this._apiUrl)
  }

  addUser(contacto): Observable<Contacto[]> {
    return this.http.post<Contacto[]>(this._apiUrl + '/addUser/', contacto)
  }

  deleteUser(contacto): Observable<Contacto[]> {
    return this.http.delete<Contacto[]>(this._apiUrl + '/deleteUser/' + contacto['_id'])
  }

  getUserById(id): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this._apiUrl + '/getUserById/' + id)
  }

  updateUser(contacto: Contacto): Observable<Contacto[]> {
    return this.http.put<Contacto[]>(this._apiUrl + '/updateUser/' + contacto['_id'], contacto)
  }
}



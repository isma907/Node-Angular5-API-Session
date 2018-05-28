import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Torneo } from '../models/torneo'


@Injectable({
  providedIn: 'root'
})
export class TorneosService {
  private _apiUrl = "http://localhost:3000/api/torneos"
  constructor(private http: HttpClient) { }

  options = { withCredentials: true }


  getTorneos(): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(this._apiUrl, this.options)
  }

  addTorneo(torneo): Observable<Torneo[]> {
    return this.http.post<Torneo[]>(this._apiUrl + '/addTorneo/', torneo)
  }

  deleteTorneo(torneo): Observable<Torneo[]> {
    return this.http.delete<Torneo[]>(this._apiUrl + '/deleteTorneo/' + torneo['_id'])
  }

  getTorneoById(id): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(this._apiUrl + '/getTorneoById/' + id)
  }

  updateTorneo(torneo: Torneo): Observable<Torneo[]> {
    return this.http.put<Torneo[]>(this._apiUrl + '/updateTorneo/' + torneo['_id'], torneo)
  }

  TorneoAddPlayer(torneoId) {
    return this.http.put<Torneo[]>(this._apiUrl + '/TorneoAddPlayer/' + torneoId, this.options)
  }
}



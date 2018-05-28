
import { Component, OnInit } from '@angular/core';
import { TorneosService } from '../services/torneos.service'

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {
  public torneos = [];
  constructor(private _TorneosService: TorneosService) { }

  ngOnInit() {
    this.getTorneos();
  }

  getTorneos = function () {
    this.loading = true;
    this._TorneosService.getTorneos().subscribe(
      data => {
        this.torneos = data
        this.loading = false;
      },
      error => {
        console.log("ERR")
        this.loading = false;
      }
    )
  }


  TorneoAddPlayer = function (torneoId) {
    this._TorneosService.TorneoAddPlayer(torneoId).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("ERR")
      }
    )
  }

}
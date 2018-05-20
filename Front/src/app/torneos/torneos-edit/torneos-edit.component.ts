import { Component, OnInit } from '@angular/core';
import { TorneosService } from '../../services/torneos.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Torneo } from '../../models/torneo'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-torneos-edit',
  templateUrl: './torneos-edit.component.html',
  styleUrls: ['./torneos-edit.component.css']
})

export class TorneosEditComponent implements OnInit {
  torneo = new Torneo();
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private _TorneosService: TorneosService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {

  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      var id = this.route.snapshot.paramMap.get('id');
      this.getTorneoById(id);
    } else {
      this.loading = false;
    }
  }

  openSnackBar(torneo, mensaje) {
    this.snackBar.open(torneo, mensaje, {
      duration: 500,
    });
  }

  getTorneoById = function (id) {
    this._TorneosService.getTorneoById(id).subscribe(
      data => {
        this.torneo = data
        this.loading = false;

      },
      error => {
        console.log("ERR")
        this.loading = false;
      }
    )
  }

  deleteTorneo = function (torneo) {
    this.loading = true;
    this._TorneosService.deleteTorneo(torneo).subscribe(
      data => {
        this.loading = false;
        this.openSnackBar(this.torneo.Nombre, "Eliminado")
        this.router.navigate(['torneos']);
      }
    )
  }

  addTorneo = function () {
    this.loading = true;
    this._TorneosService.addTorneo(this.torneo).subscribe(
      data => {
        this.torneo["_id"] = data["_id"]
        this.loading = false;
        this.openSnackBar(this.torneo.Nombre, "Agregado")
        this.router.navigate(['torneos/edit/' + this.torneo["_id"]]);
      }
    )
  }

  updateTorneo = function (torneo) {
    this._TorneosService.updateTorneo(torneo).subscribe(
      data => {
        this.openSnackBar(this.torneo.Nombre, "Actualizado")
      }
    )
  }
}

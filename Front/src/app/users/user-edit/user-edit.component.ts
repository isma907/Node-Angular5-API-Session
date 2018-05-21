import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})


export class UserEditComponent implements OnInit {
  usuario = new User();
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private _UserService: UserService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {

  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      var id = this.route.snapshot.paramMap.get('id');
      this.getUserById(id);
    } else {
      this.loading = false;
    }
  }

  openSnackBar(usuario, mensaje) {
    this.snackBar.open(usuario, mensaje, {
      duration: 500,
    });
  }

  getUserById = function (id) {
    this._UserService.getUserById(id).subscribe(
      data => {
        this.usuario = data
        this.loading = false;

      },
      error => {
        console.log("ERR")
        this.loading = false;
      }
    )
  }

  deleteUser = function (usuario) {
    this.loading = true;
    this._UserService.deleteUser(usuario).subscribe(
      data => {
        this.loading = false;
        this.openSnackBar(this.usuario.Nombre, "Eliminado")
        this.router.navigate(['usuarios']);
      }
    )
  }

  addUser = function () {
    this.loading = true;
    this._UserService.addUser(this.usuario).subscribe(
      data => {
        this.usuario["_id"] = data["_id"]
        this.loading = false;
        this.openSnackBar(this.usuario.Nombre, "Agregado")
        this.router.navigate(['usuarios/edit/' + this.usuario["_id"]]);
      }
    )
  }

  updateUser = function (usuario) {
    this._UserService.updateUser(usuario).subscribe(
      data => {
        this.openSnackBar(this.usuario.Nombre, "Actualizado")
      }
    )
  }
}

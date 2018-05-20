import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contacto } from '../../models/contacto'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contacto-edit',
  templateUrl: './contacto-edit.component.html',
  styleUrls: ['./contacto-edit.component.css']
})


export class ContactoEditComponent implements OnInit {
  contacto = new Contacto();
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private _UsersService: UsersService,
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

  openSnackBar(contacto, mensaje) {
    this.snackBar.open(contacto, mensaje, {
      duration: 500,
    });
  }

  getUserById = function (id) {
    this._UsersService.getUserById(id).subscribe(
      data => {
        this.contacto = data
        this.loading = false;

      },
      error => {
        console.log("ERR")
        this.loading = false;
      }
    )
  }

  deleteUser = function (contacto) {
    this.loading = true;
    this._UsersService.deleteUser(contacto).subscribe(
      data => {
        this.loading = false;
        this.openSnackBar(this.contacto.Nombre, "Eliminado")
        this.router.navigate(['contactos']);
      }
    )
  }

  addUser = function () {
    this.loading = true;
    this._UsersService.addUser(this.contacto).subscribe(
      data => {
        this.contacto["_id"] = data["_id"]
        this.loading = false;
        this.openSnackBar(this.contacto.Nombre, "Agregado")
        this.router.navigate(['contactos/edit/' + this.contacto["_id"]]);
      }
    )
  }

  updateUser = function (contacto) {
    this._UsersService.updateUser(contacto).subscribe(
      data => {
        this.openSnackBar(this.contacto.Nombre, "Actualizado")
      }
    )
  }
}

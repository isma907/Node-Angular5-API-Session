import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  public contactos = [];
  constructor(private _UsersService: UsersService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts = function () {
    this.loading = true;
    this._UsersService.getUsers().subscribe(
      data => {
        this.contactos = data
        this.loading = false;
      },
      error => {
        console.log("ERR")
        this.loading = false;
      }
    )
  }

}
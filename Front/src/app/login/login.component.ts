import { Component, OnInit } from '@angular/core';
import { Contacto } from "../models/contacto"
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contacto = new Contacto();
  constructor(
    private _UserService: UsersService
  ) { }

  ngOnInit() {
  }

  loginUser = function () {
    this._UserService.loginUser(this.contacto).subscribe(
      data => {
      })
  }

}

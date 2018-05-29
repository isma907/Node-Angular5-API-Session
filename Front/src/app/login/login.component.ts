import { Component, OnInit } from '@angular/core';
import { User } from "../models/user"
import { UserService } from '../services/users.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new User();
  constructor(
    private _UserService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginUser = function () {
    this._UserService.loginUser(this.usuario).subscribe(
      data => {
        this.router.navigate([""]);
      })
  }

}

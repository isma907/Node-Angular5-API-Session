import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usuarios = [];
  constructor(private _UserService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers = function () {
    this.loading = true;
    this._UserService.getUsers().subscribe(
      data => {
        this.usuarios = data
        this.loading = false;
      },
      error => {
        console.log("ERR")
        this.loading = false;
      }
    )
  }

}
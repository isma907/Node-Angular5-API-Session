import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service'

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  loading = true;
  usuarios = []

  constructor(
    private _UserService: UserService,
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers = function () {
    this._UserService.getUsers().subscribe(
      data => {
        this.usuarios = data
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    )
  }

}

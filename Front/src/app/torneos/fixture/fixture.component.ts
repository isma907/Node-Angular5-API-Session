import { Component, OnInit } from '@angular/core';
import { TorneosService } from '../../services/torneos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  loading = true;
  usuarios = []
  id = "";
  constructor(
    private _TorneosService: TorneosService,
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadUsers(this.id);
  }

  loadUsers = function (id) {
    this._TorneosService.getParticipantes(id).subscribe(
      data => {
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    )
  }

}

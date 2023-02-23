
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListModel } from 'src/app/models/list-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public service: ApiService){}

  ngOnInit(): void {
    this.getMenusByUser().subscribe(
      (resp) => {
      }
    )
  }

  getMenusByUser(): Observable<ListModel>{
    return of(ListModel);
  }
}

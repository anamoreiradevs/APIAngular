import { Observable, Subject } from 'rxjs';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/models/api/api-return';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public resultsList$ = new Subject<Results[] | undefined>();


  constructor(public service: ApiService) { }

  ngOnInit(): void {
    this.service.getCharacterList().subscribe(
      (resp) => {
        console.log(resp);
        this.resultsList$.next(resp.results);
      }
    );
  }

}

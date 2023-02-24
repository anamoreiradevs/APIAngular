import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { RickMorty } from 'src/app/models/api/rickmorty-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public rickmorty:RickMorty = new RickMorty({});

  constructor(public service: ApiService,
              public route: ActivatedRoute) {}

  ngOnInit(): void {
    let paramName = this.route.snapshot.paramMap.get('name');
    if(paramName) {
      this.service.getCharacterByName(paramName).subscribe(
        (resp) => {
          this.rickmorty = resp;
        }
      );
    }
  }
}

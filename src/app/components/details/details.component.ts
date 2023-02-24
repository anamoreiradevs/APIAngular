import { Results } from './../../models/api/rickmorty-model';
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

  public rickmorty: Results = new Results({});

  constructor(public service: ApiService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.service.getDetails(id).subscribe((resp) => {
          this.rickmorty = resp;
        })
      }
    });
  }
}

import { RickMorty, Results } from './../models/api/rickmorty-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiReturn } from '../models/api/api-return';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL_API: string = 'https://rickandmortyapi.com/api/character';

  constructor(public http: HttpClient) { }

  getCharacterList() {
    return this.http.get<ApiReturn>(this.URL_API);
  }
  getDetails(id: number) {
    return this.http.get<Results>(`${this.URL_API}/${id}`);
  }

}

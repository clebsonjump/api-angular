import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from 'src/models/filme.models';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

    listaFilme: any[];
    private url = "http://localhost:3000/filmes";
  
    constructor(private httpClient: HttpClient) {
      this.listaFilme = [];
    }
  
    get filmes() {
      return this.listaFilme;
    }
  
    todas(): Observable<Filme[]>{
      return this.httpClient.get<Filme[]>(this.url);
    }
  
  }

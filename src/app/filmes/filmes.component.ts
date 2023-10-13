import { Component, OnInit, Input } from '@angular/core';
import { Filme } from 'src/models/filme.models';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})

export class FilmesComponent implements OnInit {
  @Input() filmes: any[];

  constructor(private service: FilmesService) {}

  ngOnInit() {

    this.service.todas().subscribe((filmes: Filme[]) => {
      console.table(filmes);
      this.filmes = filmes;
    });
  }
}

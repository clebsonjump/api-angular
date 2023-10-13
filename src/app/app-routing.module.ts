import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'consulta-filmes', pathMatch: 'full' },
  { path: 'consulta-filmes', component: FilmesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

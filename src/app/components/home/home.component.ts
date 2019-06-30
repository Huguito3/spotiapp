import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  paises: any[] = [];
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  mensajeError: string = '';
  constructor(private spotifyService: SpotifyService) {
    this.error = false;
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( errorServicio ) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        this.loading = false;
      });

  }
}

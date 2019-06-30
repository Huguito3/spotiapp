import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean = true;
  topTracks: any[] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {

    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(artista => {
      this.loading = false;
      this.artista = artista;
    });
  }
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(
      topTracks => {
        this.topTracks = topTracks;
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDLEdGLxXUUjKAR79ok5M9kHz3y0fAdR7e_tucGwmtYEkbWDXbnVZO8CJCPGlv0reECAYyqz77Q6pjqsRs'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
  getArtistas(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDLEdGLxXUUjKAR79ok5M9kHz3y0fAdR7e_tucGwmtYEkbWDXbnVZO8CJCPGlv0reECAYyqz77Q6pjqsRs'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}

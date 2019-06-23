import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCF1_LuAwj_YGJ0SIQcxPpi3zZfPPrvJi0DAdf4Z5rc4AkA-b65ODEVOvWm5dSGYTHn6fbffVAaJqaa7MA'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}

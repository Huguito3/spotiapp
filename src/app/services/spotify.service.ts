import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA0nlpLw1BIQgBpO8wmdXRgR1X3z6ddUXbo0algPzJcacsLKa_B_IEDENOe8XcG4APMIqp88Pd3Syw5Lt0'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class storeService {
  constructor(private http: HttpClient) {}

  getArtistByName(name:string) {
    let url =
      `https://api.spotify.com/v1/search?q=${name}&type=artist&market=us&limit=10&offset=5`;
    let header = {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer BQCgPabP43bc1NXRwMaVWS5-b_UmDeFFbcp1F-CCD0wgubpJo9Hcp91PwrVtWd8lBjJ5X_31HdwlsG4Y-aK5h7ORgfMWvIDIcoc5Bl-TnSQsBf7f1HupMD8e-MMxB8f4nrTea9DIvp9v62UzsX9o3veIddWKGe6dDas'
      ),
    };
    return this.http.get(url, header);
  }
  getTracksById(id:string) {
    const url =
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`;
    let header = {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer BQCgPabP43bc1NXRwMaVWS5-b_UmDeFFbcp1F-CCD0wgubpJo9Hcp91PwrVtWd8lBjJ5X_31HdwlsG4Y-aK5h7ORgfMWvIDIcoc5Bl-TnSQsBf7f1HupMD8e-MMxB8f4nrTea9DIvp9v62UzsX9o3veIddWKGe6dDas'
      ),
    };
    return this.http.get(url, header);
  }
}

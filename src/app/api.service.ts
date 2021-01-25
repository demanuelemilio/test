import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  endPoint: string = "https://picsum.photos";

  constructor(private httpClient: HttpClient) { }

  getPhoto(data: string): Observable<any> {
    let httpHeaders = new HttpHeaders()
    .set('Accept', "image/webp,*/*");

    return this.httpClient.get(`${this.endPoint}/id/${data}/500/500.jpg`, {
      headers: {'Content-Type': 'image/jpg'},
      responseType: 'blob'
  });
  }


}

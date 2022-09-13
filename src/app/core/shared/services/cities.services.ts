import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  private url = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";
  // private url = "https://www.datos.gov.co/resource/4t9r-7v7i.json";
  // private url = "./assets/json/citiesColombia.json";
  // private headers = new HttpHeaders({'Authorization': `Bearer ${environment.token}`});

  getCities() {
    return this.http.get<any>(`${this.url}`);
  }
}

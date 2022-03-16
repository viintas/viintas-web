import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private url = environment.endPointProducts;
  private headers = new HttpHeaders({'Authorization': `Bearer ${environment.token}`});

  getCategories(){
    return this.http.get<any>(`${this.url}/Categories`, { headers: this.headers })
  }
}

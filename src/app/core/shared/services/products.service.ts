import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url = environment.endPointProducts
  headers = new HttpHeaders({
    'Authorization': `Bearer ${environment.token}`,
  });

  getProductsById(id: string) {
    return this.http.get<any>(`${this.url}/Products/?view=Catálogo${id}`, { headers: this.headers })
  }

  getProducts() {
    return this.http.get<any>(`${this.url}/Products`, { headers: this.headers })
  }

  getProductWeekly(){
    return this.http.get<any>(`${this.url}/Products/?weekly_option=true`, { headers: this.headers })
  }
}

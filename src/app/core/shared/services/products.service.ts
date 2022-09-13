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

  getProductsSelected() {
    return this.http.get<any>(`${this.url}/Products?fields%5B%5D=image&fields%5B%5D=name&fields%5B%5D=pvp_unitary&fields%5B%5D=pvp_wholesale&fields%5B%5D=description&filterByFormula=(%7Bstatus%7D%3D'Seleccionado')`, { headers: this.headers })
  }

  getProductWeekly() {
    return this.http.get<any>(`${this.url}/Products?fields%5B%5D=name&fields%5B%5D=image&fields%5B%5D=pvp_unitary&fields%5B%5D=pvp_wholesale&fields%5B%5D=description&fields%5B%5D=discount&filterByFormula=(%7Bweekly_option%7D+%3D+'true')&view=Lista+de+productos`,
      { headers: this.headers })
  }
}

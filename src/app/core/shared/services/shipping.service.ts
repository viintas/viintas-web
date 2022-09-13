import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private httpClient:HttpClient){ }

  // url = environment.endPointProducts
  url = "";
  headers = new HttpHeaders({
    // 'Authorization': `Bearer ${environment.token}`,
  });

  getInformationShipping(information:any) {
    return this.httpClient.get<any>(`${this.url}/Products/?view=Shipping${information}`, { headers: this.headers })
  }
}

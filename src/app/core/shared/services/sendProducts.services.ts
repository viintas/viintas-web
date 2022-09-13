import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class SendProductsService {
    private listProducts = new BehaviorSubject<any>([]);

    public customProduct = this.listProducts.asObservable();
    constructor(){ }

    public changeListProducts(list:Product[]):void{
        this.listProducts.next(list);
    }
}
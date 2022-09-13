import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HelperShoppingService {
    //Una variable Behavior requiere un valor inicial, en este caso un objeto vacio, y esta emite su valor cada vez que se suscribe
    private product = new BehaviorSubject<any>({});

    //Crea un observable del product
    public customProduct = this.product.asObservable();

    constructor() { }
    
    //Cambiar el valor del producto
    public changeMessage(product: any): void {
        this.product.next(product);
    }
}

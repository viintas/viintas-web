import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HelperShoppingService {
    private message = new BehaviorSubject<any>({});

    public customMessage = this.message.asObservable();

    constructor() { }

    public changeMessage(msg: any): void {
        this.message.next(msg);
    }
}

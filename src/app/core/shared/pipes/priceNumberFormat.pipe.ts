import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'PriceNumberFormat'
})
export class PriceNumberFormat implements PipeTransform {
    transform(value: number): unknown {
        // if(query === '' || query === undefined) {
        //     return value;
        //   }
        const currency = new Intl.NumberFormat('es-ES').format(value)
        
        return "$"+currency;
    }
}
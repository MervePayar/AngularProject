import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import {Product} from "./product"
@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], userText?:any ): Product[] {
    userText = userText?userText.toLocaleLowerCase():null

    return userText?value.filter((p:Product)=>p.name
    .toLocaleLowerCase()
    .indexOf(userText)!==-1):value
  }

}

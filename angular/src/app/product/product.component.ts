import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertifyService/alertify.service'; //servis kullanımı için import edilecek
import { ProductService } from '../services/productService/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService],
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private productService:ProductService,
    private _activatedRoute : ActivatedRoute
    ) {
  } // servisi kullanabilmek için inject yapmak gerekir
  userText: any;
  title = "Ürün Listesi"
  products: Product[];
  // birden fazla ürün, ve her ürüne ait özellik olacağından obje array oluşturmamız gerekiyor
  categoryId:any;
  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params=>
      {
        this.productService.getProducts(params["categoryId"]).subscribe(data=> //işlemin sonlandığı yer subscribe olduğu yer
        {
          this.products = data
          console.log(params)
        })
      })

  }
  addCard(product: Product) {
    this.alertifyService.success(product.name + " eklendi") //alertify servisten succes fonksiyonunu çağırdı

  }
  sepettenSil(product: Product) {
    this.alertifyService.warning(product.name + " sepetten çıkarıldı")

  }
}

import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';

import { ProductServiceService } from '../product-service.service'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers: [ProductServiceService]
})
export class ProductlistComponent implements OnInit {
filterList: string = '';
imgWidth : string = '50';  
products: Iproduct[];
showImage : boolean = false;
pageTitle : string = 'Product list';
toggleimg() : void {
    this.showImage = !this.showImage;
}

  constructor(private __productService : ProductServiceService) { }

  ngOnInit() {
    this.__productService.getProducts().subscribe(data=>{
        this.products = data;
    });
  }
  
  eventRecieve(msg:string) : void {
        this.pageTitle = "Product with "+msg+" got clicked!!";
  }

}

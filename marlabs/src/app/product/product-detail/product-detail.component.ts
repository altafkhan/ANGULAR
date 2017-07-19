import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private __route : Router,
               private __activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.__activatedRoute.params.subscribe(data => {
        console.log(data['pId']);
    });
  }
    goBackToProducts() : void {
        this.__route.navigate(['/products']);
    }
}

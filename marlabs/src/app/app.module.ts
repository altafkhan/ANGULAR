import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//for importing two-way data binding

import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductsModuleComponent } from './products-module/products-module.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    ProductsModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path:'products', component: ProductlistComponent },
        { path:'products/:pId', component: ProductDetailComponent },
        { path:'',redirectTo:'products', pathMatch:'full' },
        { path:'**',redirectTo:'products' }
    ], {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

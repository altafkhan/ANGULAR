import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductServiceService {

  constructor(private _http : Http) { }
    getProducts() : Observable<Iproduct[]>  {
           return this._http.get('api/products.json')
                    .map((response: Response) => <Iproduct[]>response.json());  
    }
}
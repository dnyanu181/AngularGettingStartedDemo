import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './products';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {
private _prodcuturl = './assets/api/product.json';

constructor(private _http: HttpClient) {}
getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._prodcuturl);
}

}

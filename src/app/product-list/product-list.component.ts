import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
 
})
export class ProductListComponent implements OnInit {
private data: IProduct[];
private showImage: boolean;
  constructor(private _productservice: ProductService) { }

  ngOnInit() {
this._productservice.getProducts().subscribe(product => { this.data = product; });
  }
 toggleImage(): void {
 this.showImage = !this.showImage;
 }
}

import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr : Products[] = [
    {productID : 101, productName : "tv", productDescription : "Samsung tv", cost:55000},
    {productID : 102, productName : "fridge", productDescription : "LG fridge", cost:35000},
    {productID : 103, productName : "Washing machine", productDescription : "TFB Washing Machine", cost:55000},
    {productID : 104, productName : "Headphones", productDescription : "JBL Headphone", cost:5000},
    {productID : 105, productName : "Electronic photo frame", productDescription : "Sony Photo frame", cost:12000}
  ]

  constructor() { }

  getAllProducts(){
    return this.productsArr;
  }
}

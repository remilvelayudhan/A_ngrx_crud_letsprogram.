import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { APIConstants } from 'src/app/shared/constants/APIContants';
import { IProducts } from 'src/app/shared/models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  http =inject(HttpClient);
  apiUrl ="https://fakestoreapi.com/";

  getProducts(){
    return this.http.get<IProducts[]>(this.apiUrl+APIConstants.product.list).pipe(
      map((product)=>{
        return product.map((product)=>{
          return {
            ...product,
            quantity:1
          }
        })
      })
    );
  }
  
}

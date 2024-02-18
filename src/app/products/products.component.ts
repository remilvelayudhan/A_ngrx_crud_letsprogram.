import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product/product.service';
import { IProducts } from '../shared/models/Products';
import { constants } from '../shared/constants/constants';
import { Store } from '@ngrx/store';
import { cartState } from '../store/cart.reducer';
import { appState } from '../app.state';
import { addTocart } from '../store/cart.action';
import { selectCartProducts } from '../store/cart.seletor';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {




  products: IProducts[] = [];
  productService = inject(ProductService);
  threeDots: string = constants.threeDots;
  private store =inject(Store<appState>);
  cartItem$: any;
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response) => this.products = response
    );
    this.cartItem$ = this.store.select(selectCartProducts);
  }

 
  addTocart(product: IProducts) {
    this.store.dispatch(addTocart({ product }));
    }
  
}

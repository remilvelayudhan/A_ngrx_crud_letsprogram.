import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'products',loadComponent:()=> import('./products/products.component').then(m => m.ProductsComponent)
        
    }
];

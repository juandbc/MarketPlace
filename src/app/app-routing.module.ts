import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [{ path: '', component: ProductListComponent },
                        { path: 'cart', component: CartComponent },
                        { path: 'products/:productId', component: ProductDetailComponent },
                        { path: 'products', component: ProductListComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

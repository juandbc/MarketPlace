import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [{ path: '', component: ProductListComponent },
                        { path: 'cart', component: CartComponent },
                        { path: 'product/:productId', component: ProductComponent },
                        { path: 'products', component: ProductListComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

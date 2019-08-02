import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';
import { Product } from '../model/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;
  products: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    const id: string = localStorage.getItem('cartId');
    this.getCart(id);
  }

  getCart(cartId: string): void {
    this.cartService.getCart(cartId).subscribe(cart => {
      this.cart = cart;
    });
  }

  async addToCart(productId: string) {
    const cartId = localStorage.getItem('cartId');

    const response = await this.cartService.addToCart(cartId, productId);
    console.log(response);

    if (response.success) {
      localStorage.setItem('cartId', response.cartId);
      window.alert('Product added to the cart');
    }
  }

  // removeProduct(productId: string) {
  //   if (this.cartService.removeProduct(productId)) {
  //     window.alert('Product removed from the cart');
  //   }
  // }

  // updateQuantity(product, qty) {
  //   this.cartService.updateQuantity(product, qty);
  // }
}

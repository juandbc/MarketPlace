import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
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
}

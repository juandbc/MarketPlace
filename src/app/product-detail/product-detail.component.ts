import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  quantity: number;
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    let id;
    this.route.paramMap.subscribe(params => {
      id = params.get('productId');
    });
    this.getProduct(id);
  }

  getProduct(productId: string) {
    this.productService.getProduct(productId).subscribe(product => {
      console.log(product);
      this.product = product;
    });
  }

  async addToCart(productId: string, quantity: number) {
    const cartId = localStorage.getItem('cartId');

    const response = await this.cartService.addToCart(cartId, productId, quantity);
    console.log(response);

    if (response.success) {
      localStorage.setItem('cartId', response.cartId);
      window.alert('Product added to the cart');
    }
  }
}

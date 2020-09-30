import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { CartObject } from '../cartObject';
import { CartService } from './cart.service'
import socks from '../../assets/products/productList.json'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) { }
  removeFromCart(id) {
    this.cartService.removeFromCart(id)
  }
  clearCart() {
    this.cartService.clearCart()
  }

  ngOnInit(): void {
  
  }
}
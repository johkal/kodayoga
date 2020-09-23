import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { CartObject } from '../cartObject';
import { CartService } from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartObject[]
  constructor(private cartService: CartService) { }
  
  getCart(): void {
    this.cartService.getCart()
      .subscribe(cart => this.cart = cart)
  }
  ngOnInit(): void {
    this.getCart()
    console.log("cart")
    console.log(this.cart)
  }

}

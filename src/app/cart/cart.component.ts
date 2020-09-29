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
  cart: CartObject[]
  Socks: any = socks
  socksInCart: any[]
  constructor(private cartService: CartService) { }

  getCart(): void {
    this.cartService.getCart()
      .subscribe(cart => this.cart = cart)
  }
  removeFromCart(id) {
    this.cartService.removeFromCart(id)
  }
  clearCart() {
    console.log('clearCart 1')
    this.cartService.clearCart()
      .subscribe(cart => this.cart = cart)
    this.socksInCart = []
  }
  getProduct() {
    this.socksInCart = []
    for (let i = 0; i < this.cart.length; i++) {
      for (let j = 0; j < this.Socks.length; j++) {
        if (this.cart[i].id == this.Socks[j].id) {
          this.socksInCart.push({name: this.Socks[j].name, id: this.Socks[j].id, img: this.Socks[j].img, amount: this.cart[i].amount})
          break;
        }
      }
    }
  }
  ngOnInit(): void {
    this.getCart()
    this.getProduct()
  }
}
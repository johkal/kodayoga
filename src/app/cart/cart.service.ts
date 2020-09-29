import { Injectable } from '@angular/core';
import { CartObject } from '../cartObject';
import { Observable, of } from 'rxjs';
import { CartComponent } from './cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartObject[] = []
  
  addToCart(what: CartObject) {
    this.cart.push(what)
    return this.cart
  }
  clearCart(): Observable<CartObject[]> {
    console.log('clearCart 2')
    this.cart = []
    return of(this.cart)
  }
  removeFromCart(id) {

  }
  getCart(): Observable<CartObject[]> {
    return of(this.cart)
  }
  constructor() { }
}

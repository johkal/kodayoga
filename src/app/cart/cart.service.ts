import { Injectable } from '@angular/core';
import { CartObject } from '../cartObject';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartObject[] = []
  
  addToCart(what: CartObject) {
    this.cart.push(what)
    return this.cart
  }
  getCart(): Observable<CartObject[]> {
    return of(this.cart)
  }
  constructor() { }
}

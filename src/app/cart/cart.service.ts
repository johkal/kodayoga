import { Injectable } from '@angular/core';
import { CartObject } from '../cartObject';
import { Observable, of, Subject } from 'rxjs';
import { CartComponent } from './cart.component';
import { Sock } from '../sock'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartObject[] = []
  cartChange: Subject<boolean> = new Subject<boolean>();
  totalCost: number = 0

  addToCart(sock: Sock, amount, type) {
    this.cart.push({sock: sock, amount: amount, type: type})
    this.cartChange.next()
  }
  clearCart() {
    this.cart = []
    this.cartChange.next()
  }
  removeFromCart(id) {
    this.cart = this.cart.filter(x => id != x.sock.id)
    this.cartChange.next()
  }
  
  constructor() { 
    this.cartChange.subscribe(() => {
      this.totalCost = 0
      let tempCost = 0
      for (let i = 0; i < this.cart.length; i++) {
        tempCost = this.cart[i].sock.price * this.cart[i].amount
        console.log("tempCost " + i)
        console.log(tempCost)
        this.totalCost += tempCost
      }
    })
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Sock } from '../../sock'
import { CartObject } from '../../cartObject'
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  test : String;
  @Input() sock : Sock;
  constructor() { }

  addToCart(Id, Type, Amount) {
    const cartObj : CartObject = {id: Id, type: Type, amount: Amount};
    console.log(cartObj);
    console.log(this.sock.id + ": " + Id);
  }

  ngOnInit(): void {
  }

}

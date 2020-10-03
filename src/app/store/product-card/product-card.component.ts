import { Component, OnInit, Input } from '@angular/core';
import { Sock } from '../../sock'
import { CartObject } from '../../cartObject'
import { CartService } from '../../cart/cart.service'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() sock : Sock;
  @Input() selectedType;
  constructor(private cartService: CartService) { }

  addToCart(Id, Amount) {
    this.cartService.addToCart(Id, Amount, this.selectedType);
    console.log(this.sock.id + ": " + Id);
  }
  ngOnInit(): void {
  }

}

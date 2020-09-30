import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service'
import { CartObject } from '../cartObject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  company = 'Urban Socks';
  slogan = 'We keep your feet warm. And cool.';
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }
}
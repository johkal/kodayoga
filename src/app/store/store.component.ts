import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import socks from '../../assets/img/socks';
import socks from '../../assets/products/productList.json'


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  company = 'Urban Socks';
  slogan = 'We keep your feet warm. And cool'
  Socks: any = socks;
  constructor(private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle("Store - " + this.company)
    // console.log('socks:')
    // console.log(Object.getOwnPropertyNames(socks[1]))
    // console.log(Object.values(socks))
  }

}

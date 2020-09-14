import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import socks from '../../assets/img/socks';
import socks from '../../assets/products/productList.json'


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  filter = '';
  company = 'Urban Socks';
  slogan = 'We keep your feet warm. And cool'
  Socks: any = socks;
  constructor(
    private titleService:Title,
    private route: ActivatedRoute){
   }

  ngOnInit() {
    this.titleService.setTitle("Store - " + this.company)
    this.filter = this.route.snapshot.paramMap.get('filter');
  }

}

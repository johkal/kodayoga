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
  activeFilter = null;
  filters = ['men', 'women', 'kids', 'solidColor', 'pattern'];
  colors = ['red', 'yellow', 'green', 'blue'];
  company = 'Urban Socks';
  slogan = 'We keep your feet warm. And cool'
  Socks: any = socks;
  constructor(
    private titleService: Title,
    private route: ActivatedRoute) {
  }

  changeFilter(e) {
    console.log(e.target.id);
  }

  ngOnInit() {
    this.titleService.setTitle("Store - " + this.company)
    this.activeFilter = this.route.snapshot.paramMap.get('filter');
    console.log(this.activeFilter);
  }

}

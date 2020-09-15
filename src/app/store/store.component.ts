import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
// import socks from '../../assets/img/socks';
import socks from '../../assets/products/productList.json'


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  activeFilter = '';
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
    if (e.target.checked)
      this.activeFilter = e.target.id
    else
      this.activeFilter = '';
  }

  ngOnInit() {
    this.titleService.setTitle("Store - " + this.company)
    if (this.route.snapshot.paramMap.get('filter'))
      this.activeFilter = this.route.snapshot.paramMap.get('filter');
    console.log(this.activeFilter);
  }

}

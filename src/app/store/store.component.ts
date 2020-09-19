import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Types } from '../../app/types'
import socks from '../../assets/products/productList.json'
import { SlicePipe } from '@angular/common';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  activeFilter = ''
  activeType = ''
  filters = ['men', 'women', 'kids', 'solidColor', 'pattern']
  colors = ['red', 'yellow', 'green', 'blue']
  company = 'Urban Socks'
  slogan = 'We keep your feet warm. And cool'
  Socks: any = socks
  
  types: Types[]

  constructor(
    private titleService: Title,
    private route: ActivatedRoute) {
  }

  addToCart(e) {
    console.log(e)
  }

  getSockTypes() {
    let sockTypes = [];
    for (let i = 1; i < 6; i++) {
      sockTypes.push({ id: i, selected: false, url: "assets/img/products/socks/types/", img: i + ".png" })
      console.log(sockTypes[i])
    }
    return sockTypes;
  }

  toggleSelected(type) {
    if (type.selected) {
      type.img = type.id + ".png"
      type.selected = false
    }
    else {
      type.img = type.id + "selected.png"
      type.selected = true
    }
  }

  changeFilter(e) {
    if (e.target.checked)
      this.activeFilter = e.target.id
    else
      this.activeFilter = ''
  }

  ngOnInit() {
    this.types = this.getSockTypes()
    // this.SockTypes = this.getSockTypes();
    this.titleService.setTitle("Store - " + this.company)
    if (this.route.snapshot.paramMap.get('filter'))
      this.activeFilter = this.route.snapshot.paramMap.get('filter')
    console.log(this.activeFilter)
  }

}

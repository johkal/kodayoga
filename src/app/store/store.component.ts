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
  selectedFilters = [this.activeFilter, this.activeType]
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

  setDefaultSockTypes() {
    let sockTypes = [];
    for (let i = 1; i < 6; i++)
      sockTypes.push({ id: i, selected: false, url: "assets/img/products/socks/types/", img: i + ".png" })
    return sockTypes;
  }

  toggleSelectedType(type) {
    if (!type.selected) {
      this.types.forEach((x) => { x.selected = false; x.img = (x.id + ".png") })
      type.img = type.id + "selected.png"
      type.selected = true
      this.activeType = type.id
    }
    else {
      type.img = type.id + ".png"
      type.selected = false
      this.activeType = ''
    }

    this.setSocks()
  }

  changeFilter(e) {
    if (e.target.checked)
      this.activeFilter = e.target.id
    else
      this.activeFilter = ''

    this.setSocks()
  }

  setSocks() {
    if (this.activeFilter && this.activeType)
      this.Socks = socks.filter((x) => x.filter.includes(this.activeFilter) && x.type.includes(this.activeType))
    else if(this.activeFilter && !this.activeType)
      this.Socks = socks.filter((x) => x.filter.includes(this.activeFilter))
    else if(!this.activeFilter && this.activeType)
      this.Socks = socks.filter((x) => x.type.includes(this.activeType))
    else
      this.Socks = socks
  }

  ngOnInit() {
    this.types = this.setDefaultSockTypes()
    // this.toggleSelectedType(this.types[1])
    this.titleService.setTitle("Store - " + this.company)
    if (this.route.snapshot.paramMap.get('filter'))
      this.activeFilter = this.route.snapshot.paramMap.get('filter')
    console.log(this.activeFilter)
  }

}

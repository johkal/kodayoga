import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  company = 'Urban Socks';
  slogan = 'We keep your feet warm. And cool'
  constructor(private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle("About - " + this.company)
  }

}

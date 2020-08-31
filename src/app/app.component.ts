import { Component } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  company = 'Urban Socks';
  slogan = 'We keep your feet warm. And cool'
  constructor(private titleService:Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.company);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }

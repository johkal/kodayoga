import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  largeCarouselOptions: any = {
    loop: true,
    margin: 0,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 3000,
    items: 1,
    nav: false,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 6000,
    autoplayHoverPause: true
  };

  largeCarouselData: any = [
    {
      title: 'Bekvämt i alla väder',
      text: 'Är du trött på alla strumpor med för mycket mönster? Den nya No-mönster-eller-färg-strumpan blir dina fötter lika tråkiga som din personlighet. Köp idag och sluta vara inspirerande.',
      imageUri: '../../assets/img/home/men.jpg',
      imageAlt: 'Män',
      buttonText: 'Strumpor för män',
      link: '/store/men'
    },
    {
      title: 'Dress for success',
      text: 'Dansstrumpan är den enda strumpan i sitt slag, den överlever en lång kväll på dansgolvet eller en hård arbetsdag utan att behöva bytas. Dansstrumpan är uppbyggd i nät och ger därav en bra vädring och minskar fotsvett.',
      imageUri: '../../assets/img/home/women.jpg',
      imageAlt: 'Kvinnor',
      buttonText: 'Strumpor för kvinnor',
      link: '/store/women'
    },
    {
      title: 'Redo för äventyr',
      text: 'Med Urbans randiga strumpor blir varje dag ett knasigt äventyr, finns för barn i alla åldrar. Vilken dag är din strumpdag?',
      imageUri: '../../assets/img/home/kids.jpg',
      imageAlt: 'Barn',
      buttonText: 'Strumpor för barn',
      link: '/store/kids'
    },
  ];

  isLoading = true;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
  }

}

import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalSlides = 3;
  proportion = 25;
  interval = 5000;

  slides = [
    { 'image': './assets/images/slider/1.jpg' },
    { 'image': './assets/images/slider/2.jpg' },
    { 'image': './assets/images/slider/3.jpg' },
  ];


  trendingSlides = [
    { 'src': './assets/images/trending/1.jpg','alt':"111","id":'1' ,"title":"jsjs"},
    { 'src': './assets/images/trending/2.jpg','alt':"111","id":'2' ,"title":"jsjs"},
    { 'src': './assets/images/trending/3.jpg','alt':"111","id":'3' ,"title":"jsjs" },
    { 'src': './assets/images/trending/4.jpg','alt':"111","id":'3' ,"title":"jsjs" },
    { 'src': './assets/images/trending/5.jpg','alt':"111","id":'3' ,"title":"jsjs" },
    { 'src': './assets/images/trending/6.jpg','alt':"111","id":'3' ,"title":"jsjs" },
    { 'src': './assets/images/trending/7.jpg','alt':"111","id":'3' ,"title":"jsjs" },
  ];


  menSlides =  [
    { 'src': './assets/images/men/1.jpg','alt':"111","id":'1' ,"title":"jsjs"},
    { 'src': './assets/images/men/2.jpg','alt':"111","id":'2' ,"title":"jsjs"},
    { 'src': './assets/images/men/3.jpg','alt':"111","id":'3' ,"title":"jsjs" },
    { 'src': './assets/images/men/4.jpg','alt':"111","id":'3' ,"title":"jsjs" },
    { 'src': './assets/images/men/5.jpg','alt':"111","id":'3' ,"title":"jsjs" },
    { 'src': './assets/images/men/6.jpg','alt':"111","id":'3' ,"title":"jsjs" },
    { 'src': './assets/images/men/7.jpg','alt':"111","id":'3' ,"title":"jsjs" },
  ];

  constructor() { }

  ngOnInit(): void {
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

}

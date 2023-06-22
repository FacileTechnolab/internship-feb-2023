import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  customOptions: OwlOptions={
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        },
    },
  }

    slides = [
      {id:1, img: "assets/image/ser-card1-img.jpg"},
      {id:2, img: "assets/image/ser-card2-img.jpg"},
      {id:3, img: "assets/image/ser-card3-img.jpg"},
      {id:4, img: "assets/image/ser-card4-img.jpg"},
      {id:5, img: "assets/image/ser-card2-img.jpg"},

    ];
}

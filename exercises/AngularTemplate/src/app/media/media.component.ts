import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  customOptions: OwlOptions = {
    loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 3,
          },
        },
    
  }
  




  
    slides = [
      {id: 1, img: "assets/images/1.jpg"},
      {id: 2, img: "assets/images/3.jpg"},
      {id: 3, img: "assets/images/4.jpg"},
      {id: 4, img: "assets/images/1.jpg"},
      {id: 5, img: "assets/images/partici-slider.jpg"},
      {id: 6, img: "assets/images/4.jpg"},
      {id: 6, img: "assets/images/partici-slider.jpg"}
    ];
}

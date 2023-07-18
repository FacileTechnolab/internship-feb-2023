import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hometitle= 'Enjoy Your Healthy '
  homesectitle='Delicious Food'
  homedesc= 'Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.'
  homeimg = 'assets/img/hero-img.png'
  homebuttontext = 'Book a Table'
  homeicon = 'bi bi-play-circle'
  youlink = 'https://www.youtube.com/watch?v=LXb3EKWsInQ'


  constructor() { }

  ngOnInit() {
  }
  tobooktable()
  {
   document.getElementById("book-a-table")?.scrollIntoView({behavior: "smooth"});
  }

}

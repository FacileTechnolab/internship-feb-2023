import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

   url:string= "/assets/json/eventsdata.json" ;
  eventsboxs: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get(this.url).subscribe(result=>{
        
        this.eventsboxs =result
      });
   console.log(this.eventsboxs)
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
     
    },
    nav: false
  }
}

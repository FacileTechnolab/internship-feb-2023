import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  url: string = "/assets/json/testimonialsdata.json" ;
  testimonibox: Observable<any> | undefined;
  @Input() value: any;

 constructor(private http: HttpClient) { }

  ngOnInit() {
    this.testimonibox = this.http.get(this.url);
    console.log(this.testimonibox)
  }

}

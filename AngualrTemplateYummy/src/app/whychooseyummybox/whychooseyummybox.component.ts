import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-whychooseyummybox',
  templateUrl: './whychooseyummybox.component.html',
  styleUrls: ['./whychooseyummybox.component.css']
})
export class WhychooseyummyBoxComponent implements OnInit {
   url: string = "/assets/json/whychoosedata.json" ;
  
   @Input() value: any;
   whychoosebox: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

      console.log('child', this.whychoosebox);
  }

}

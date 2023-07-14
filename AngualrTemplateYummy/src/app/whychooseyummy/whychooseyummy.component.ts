import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-whychooseyummy',
  templateUrl: './whychooseyummy.component.html',
  styleUrls: ['./whychooseyummy.component.css']
})
export class WhychooseyummyComponent implements OnInit {
  url:string= "/assets/json/whychoosedata.json" ;
  whychoosebox: Observable<any> | undefined;
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.whychoosebox = this.http.get(this.url);
    console.log(this.whychoosebox)
  }

}

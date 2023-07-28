import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetaiartcal',
  templateUrl: './blogdetaiartcal.component.html',
  styleUrls: ['./blogdetaiartcal.component.css']
})
export class BlogdetaiartcalComponent implements OnInit {
  url: string= "/assets/json/blogdetailartical.json"
  blogsetaildata: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{

      this.blogsetaildata =result;
    });
    console.log("projectdetailinfo",this.blogsetaildata)
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetailsidebar',
  templateUrl: './blogdetailsidebar.component.html',
  styleUrls: ['./blogdetailsidebar.component.css']
})
export class BlogdetailsidebarComponent implements OnInit {
url: string= "/assets/json/blogsetsidebar.json"
blogsidbardata: any;

url1:string= "/assets/json/blogsidbarcategorylist.json"
bsidbarcategorylist: any;

url2: string= "/assets/json/blogdetailsidebarpost.json"
bsidbarpost:any;


url3: string = "/assets/json/blogdetailsidebartags.json"
bsidbartags: any;

@Input() data:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{

      this.blogsidbardata =result;
    });
    console.log("blogsidbardata",this.blogsidbardata)

    this.http.get(this.url1).subscribe(result=>{

      this.bsidbarcategorylist =result;
    });
    console.log("bsidbarcategorylist",this.bsidbarcategorylist)

    this.http.get(this.url2).subscribe(result=>{

      this.bsidbarpost =result;
    });
    console.log("bsidbarpost",this.bsidbarpost)

    this.http.get(this.url3).subscribe(result=>{

      this.bsidbartags =result;
    });
    console.log("bsidbartags",this.bsidbartags)
  }

}

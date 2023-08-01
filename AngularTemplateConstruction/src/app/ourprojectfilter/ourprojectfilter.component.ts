import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface filter{
  index:string
        class: string
        img:string 
        head: string
        desc: string
        hrefimg:string
        iconzoom: string
        href: string
        iconlink: string
}
@Component({
  selector: 'app-ourprojectfilter',
  templateUrl: './ourprojectfilter.component.html',
  styleUrls: ['./ourprojectfilter.component.css']
})
export class OurprojectfilterComponent implements OnInit {

   //filter tab acitve-color change
 activeFilter: string = 'all';
 
  url:string="/assets/json/ourprojectbox.json"
  ourvalue:any;
  TabImages:filter[]=[];
  ourtabfilter:filter[]=this.TabImages;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.ourvalue =result
      this.TabImages=this.ourvalue;
      this.ourtabfilter=this.TabImages
    });
 console.log(this.ourvalue)
  }
  
  filtertab(index:string):void{

    //filter tab acitve-color change
    this.activeFilter = index;

    if(index=== 'all'){
      this.ourtabfilter=this.TabImages
    }
    else{
      this.ourtabfilter=this.TabImages.filter(filter=> filter.index === index)
      console.log(this.ourtabfilter)
    }
  }

}

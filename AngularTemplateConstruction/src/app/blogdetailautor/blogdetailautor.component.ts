import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetailautor',
  templateUrl: './blogdetailautor.component.html',
  styleUrls: ['./blogdetailautor.component.css']
})
export class BlogdetailautorComponent implements OnInit {
  url:string= "/assets/json/blogdetailautorsocila.json"
  blodetsocilvalue:any;
   @Input() data:any;
  url1: string = "/assets/json/blogdetailauthor.json"
  blogdetailauthordata: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.blodetsocilvalue =result
    });
 console.log(this.blodetsocilvalue)

 this.http.get(this.url1).subscribe(result=>{
  this.blogdetailauthordata =result
});
console.log(this.blogdetailauthordata)

  }

}

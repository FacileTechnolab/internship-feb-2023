import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servcesdetaillist',
  templateUrl: './servcesdetaillist.component.html',
  styleUrls: ['./servcesdetaillist.component.css']
})
export class ServcesdetaillistComponent implements OnInit {
  url:string = "/assets/json/servicesdetaillist.json";
  serdetaillistvalue: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.serdetaillistvalue =result
    });
 console.log(this.serdetaillistvalue)
  }

}

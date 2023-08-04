import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Greenapple',
  templateUrl: './Greenapple.component.html',
  styleUrls: ['./Greenapple.component.css']
})
export class GreenappleComponent implements OnInit {
apple:any
productdetailid
productdetail;

url: string ="assets/json/green.json"
constructor(private http:HttpClient, private activatedroute: ActivatedRoute) { }

ngOnInit() {
  this.http.get(this.url).subscribe(res =>{this.apple = res; console.log(this.apple);} )

  this.productdetailid=this.activatedroute.snapshot.paramMap.get('id');
  this.productdetail=this.apple.find(x=> x.id == this.productdetailid);
}

}
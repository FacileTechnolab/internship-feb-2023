import { HttpClient } from '@angular/common/http';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cartinbox',
  templateUrl: './cartinbox.component.html',
  styleUrls: ['./cartinbox.component.css']
})
export class CartinboxComponent implements OnInit {
url : string ="assets/json/cartinboxcolum.json"
@Input () column :any

constructor(private http:HttpClient) { }

ngOnInit() {
  this.http.get(this.url).subscribe(res =>{this.column = res; console.log(this.column);} )
}
oncart(){
  document.getElementById("cart")?.scrollIntoView({behavior: 'smooth'})
}

}

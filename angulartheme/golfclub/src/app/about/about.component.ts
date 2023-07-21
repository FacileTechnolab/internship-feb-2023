import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title="About Tiya"
  title1="Tiya Club History"
  info="Since 1984";
  infodes=" , Tiya is ranked #8 in the top 10 golf courses in the world. Tiya is Bootstrap 5 HTML CSS template for golf clubs. Anyone can modify and use this layout for commercial purposes."
  infodesc="Tiya Golf Club is 100% free CSS template provided by TemplateMo website. Please tell your friends about our website. Thank you for visiting."
  data:any;

  url: string = '/assets/static/aboutdata.json';
 
constructor(private http: HttpClient) {
  
}

ngOnInit() {
  this.http.get(this.url).subscribe(res => {
    this.data = res;
    //console.log(this.data);
  });


  
  }

  onclick(){
    redirectto:"#";
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
url:string="/assets/json/footer.json"
footer:any
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.footer =result
    });
 console.log(this.footer)
  }

}

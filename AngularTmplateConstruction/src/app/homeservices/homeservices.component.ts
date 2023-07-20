import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeservices',
  templateUrl: './homeservices.component.html',
  styleUrls: ['./homeservices.component.css']
})
export class HomeservicesComponent implements OnInit {
  sectitle = 'Services'
  secdesc = 'Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam'
  url: string = "/assets/json/homeservices.json" ;
  serviboxdata: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.serviboxdata =result
    });
 console.log(this.serviboxdata)
  }

}

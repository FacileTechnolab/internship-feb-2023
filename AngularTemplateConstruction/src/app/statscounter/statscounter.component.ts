import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statscounter',
  templateUrl: './statscounter.component.html',
  styleUrls: ['./statscounter.component.css']
})
export class StatscounterComponent implements OnInit {
  url: string = "/assets/json/counter.json" ;
  counterdata: any;

  arrayDataInterval: any = setInterval(() => {
    this.counterdata.forEach((element: any, index: number) => {


      if(element.number < element.maxNumber)
      {
        this.counterdata[index].number++;
      }
    });
  },20)



  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.counterdata =result
    });
  console.log(this.counterdata)
  }

}

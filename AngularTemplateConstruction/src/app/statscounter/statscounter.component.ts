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

  // function startDynamicInterval(targetValue, intervalTime) {
  //   let clientscout = 0;
  
  //   const interval = setInterval(() => {
  //     clientscout++;
  
  //     if (clientscout === targetValue) {
  //       clearInterval(interval);
  //     }
  //   }, intervalTime);
  // }
  
  // clientscout: number = 0;
  // projectscout: number = 0;
  // hourcout : number = 0;
  // workerscout: number = 0;

  // clientscoutstop : any = setInterval(() => {
  //   this.clientscout++;

  //   if(this.clientscout == 232)
  //   {
  //     clearInterval(this.clientscoutstop);
  //   }
  // },10)


  // projectscoutstop : any = setInterval(() => {
  //   this.projectscout++;

  //   if(this.projectscout == 521)
  //   {
  //     clearInterval(this.projectscoutstop);
  //   }
  // },10)

  // hourcoutstop : any = setInterval(() => {
  //   this.hourcout++;

  //   if(this.hourcout == 1463)
  //   {
  //     clearInterval(this.hourcoutstop);
  //   }
  // },3)

  // workerscoutstop : any = setInterval(() => {
  //   this.workerscout++;

  //   if(this.workerscout == 15)
  //   {
  //     clearInterval(this.workerscoutstop);
  //   }
  // },100)
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.counterdata =result
    });
  console.log(this.counterdata)
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.component.html',
  styleUrls: ['./hometab.component.css']
})
export class HometabComponent implements OnInit {
  // tabdata:any;
  tabdata : string [] = ['Modisit', 'Praesenti', 'Explica', 'Nostrum'];
  url: string = "/assets/json/tab.json" ;
  activatedTabIndex: number = 0;
  sertabarry : Array<any>;
  constructor(private http: HttpClient) { 
    this.sertabarry = [
        
      {
         sermenutitle: 'Voluptatem dignissimos provident',
         sermenudesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         sermenuicon: 'bi bi-check2-all',
         sermenuicondesc1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         sermenuicondesc2: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
         sermenuicondesc3: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
         sermenuimg: 'assets/img/features-1.jpg',
         index: 0
      },
      {
        sermenutitle: 'Neque exercitationem debitis',
        sermenudesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        sermenuicon: 'bi bi-check2-all',
        sermenuicondesc1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        sermenuicondesc2: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
        sermenuicondesc3: 'Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.',
        sermenuicondesc4: 'Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.',
        sermenuimg: 'assets/img/features-2.jpg',
        index: 1
     },
     {
      sermenutitle: 'Voluptatibus commodi accusamu',
      sermenudesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      sermenuicon: 'bi bi-check2-all',
      sermenuicondesc1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sermenuicondesc2: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
      sermenuicondesc3: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
      sermenuimg: 'assets/img/features-3.jpg',
      index: 2

   },
   {
    sermenutitle: 'Omnis fugiat ea explicabo sunt',
    sermenudesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    sermenuicon: 'bi bi-check2-all',
    sermenuicondesc1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sermenuicondesc2: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
    sermenuicondesc3: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
    sermenuimg: 'assets/img/features-4.jpg',
    index: 3
   }
  ]
  }

  ngOnInit() {
    // this.http.get(this.url).subscribe(result=>{
    //   this.tabdata =result
    // });
//  console.log(this.tabdata)
console.log("tabchange",this.sertabarry)
  }
  tabChange(tabIndex: number){
    debugger;
    this.activatedTabIndex = tabIndex;
  }
  }



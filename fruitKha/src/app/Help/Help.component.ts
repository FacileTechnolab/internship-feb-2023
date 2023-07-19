import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Help',
  templateUrl: './Help.component.html',
  styleUrls: ['./Help.component.css']
})
export class HelpComponent implements OnInit {
 help:Array<any>;

  constructor() {
    this.help =[
      {
        icon : 'fas fa-shipping-fast',
        head: 'Free Shipping',
        per: 'When order over $75'
      },
      {
        icon : 'fas fa-phone-volume',
        head: '24/7 Support',
        per: 'Get support all day'
      },
      {
        icon : 'fas fa-sync',
        head: 'Refund',
        per: 'Get refund within 3 days!'
      },


    ]

    

   }

  ngOnInit() {
  }

}

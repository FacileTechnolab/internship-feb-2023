import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tabs : string [] = ['Starters', 'Breakfast', 'Lunch', 'Dinner'];
  activatedTabIndex: number = 0;
  menutabarry : Array<any>;
  // menutabcol:Array<any>;

  constructor() { 
    this.menutabarry = [
      
        
          {
               menuconthraf : 'assets/img/menu/menu-item-1.png',
               menucontimg: 'assets/img/menu/menu-item-1.png',
               menuconttitle: 'Magnam Tiste',
               menuconttitingr: 'Lorem, deren, trataro, filede, nerada',
               menucontprice: '$5.95',
               index: 0
             

          },
          
          {
            menuconthraf : 'assets/img/menu/menu-item-2.png',
            menucontimg: 'assets/img/menu/menu-item-2.png',
            menuconttitle: 'Magnam Tiste',
            menuconttitingr: 'Lorem, deren, trataro, filede, nerada',
            menucontprice: '$5.95',
            index: 1

         },
         {
          menuconthraf : 'assets/img/menu/menu-item-3.png',
          menucontimg: 'assets/img/menu/menu-item-3.png',
          menuconttitle: 'Magnam Tiste',
          menuconttitingr: 'Lorem, deren, trataro, filede, nerada',
          menucontprice: '$5.95',
          index: 2

       },
       {
        menuconthraf : 'assets/img/menu/menu-item-4.png',
        menucontimg: 'assets/img/menu/menu-item-4.png',
        menuconttitle: 'Magnam Tiste',
        menuconttitingr: 'Lorem, deren, trataro, filede, nerada',
        menucontprice: '$5.95',
        index: 3
     }
   
        
         
        
          

        
   
      
     
    //   {
    //     menuconthraf : 'assets/img/menu/menu-item-2.png',
    //     menucontimg: 'assets/img/menu/menu-item-2.png',
    //     menuconttitle: 'Aut Luia',
    //     menuconttitingr: 'Lorem, deren, trataro, filede, nerada',
    //     menucontprice: '$14.95',
    //     index: 1
    //  },
    //  {
    //   menuconthraf : 'assets/img/menu/menu-item-3.png',
    //   menucontimg: 'assets/img/menu/menu-item-3.png',
    //   menuconttitle: 'Est Eligendi',
    //   menuconttitingr: 'Lorem, deren, trataro, filede, nerada',
    //   menucontprice: ' $8.95',
    //   index: 2
    //  },
    //  {
    //   menuconthraf : 'assets/img/menu/menu-item-4.png',
    //   menucontimg: 'assets/img/menu/menu-item-4.png',
    //   menuconttitle: 'Est Eligendi',
    //   menuconttitingr: 'Lorem, deren, trataro, filede, nerada',
    //   menucontprice: '$12.95',
    //   index: 3
    //  },
    //  {
    //   menuconthraf : 'assets/img/menu/menu-item-5.png',
    //   menucontimg: 'assets/img/menu/menu-item-5.png',
    //   menuconttitle: 'Eos Luibusdam',
    //   menuconttitingr: 'Lorem, deren, trataro, filede, nerada',
    //   menucontprice: '$12.95',
    //   index: 4
    //  },
    //  {
    //   menuconthraf : 'assets/img/menu/menu-item-6.png',
    //   menucontimg: 'assets/img/menu/menu-item-6.png',
    //   menuconttitle: 'Laboriosam Direva',
    //   menuconttitingr: 'Lorem, deren, trataro, filede, nerada',
    //   menucontprice: '$9.95',
    //   index: 5
    //  }
    ]
  }

  ngOnInit() {
    console.log("tabchange",this.menutabarry)
  }
  tabChange(tabIndex: number){
    debugger;
    this.activatedTabIndex = tabIndex;
  }


}

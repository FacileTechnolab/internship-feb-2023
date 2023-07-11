import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-box',
  templateUrl: './services-box.component.html',
  styleUrls: ['./services-box.component.css']
})
export class ServicesBoxComponent implements OnInit {
  data: Array<any>;
  constructor() { 
    this.data = [
      { 
        icon : 'fa-solid fa-mountain-city',
        title: 'Nesciunt Mete',
        dsc: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
        linktext: 'Learn more',
        url: '/services-details'
       },
       { 
        icon : 'fa-solid fa-arrow-up-from-ground-water',
        title: 'Eosle Commodi',
        dsc: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
        linktext: 'Learn more',
        url: '/services-details'
       },
       { 
        icon : 'fa-solid fa-compass-drafting',
        title: 'Ledo Markt',
        dsc: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisc ieos earum corrupti.',
        linktext: 'Learn more',
        url: '/services-details'
       },
       { 
        icon : 'fa-solid fa-trowel-bricks',
        title: 'Asperiores Commodit',
        dsc: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
        linktext: 'Learn more',
        url: '/services-details'
       },
       { 
        icon : 'fa-solid fa-helmet-safety',
        title: 'Velit Doloremque',
        dsc: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
        linktext: 'Learn more',
        url: '/services-details'
       },
       { 
        icon : 'fa-solid fa-arrow-up-from-ground-water',
        title: 'Dolori Architecto',
        dsc: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
        linktext: 'Learn more',
        url: '/services-details'
       },
  ];
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefbox',
  templateUrl: './chefbox.component.html',
  styleUrls: ['./chefbox.component.css']
})
export class ChefboxComponent implements OnInit {
  chefdata: Array<any>;
 
  constructor() {
    this.chefdata = [
      {
        chefimg:'assets/img/chefs/chefs-1.jpg',
        cheftitle: 'Walter White',
        chefsubtitle: 'Master Chef',
        chefdesc : 'Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.',
        cheftwitter: 'bi bi-twitter',
        cheffacbook: 'bi bi-facebook',
        chefinsta: 'bi bi-instagram',
        cheflinkd: 'bi bi-linkedin'
      },
      {
        chefimg:'assets/img/chefs/chefs-2.jpg',
        cheftitle: 'Sarah Jhonson',
        chefsubtitle: 'Sarah Jhonson',
        chefdesc : 'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.',
        cheftwitter: 'bi bi-twitter',
        cheffacbook: 'bi bi-facebook',
        chefinsta: 'bi bi-instagram',
        cheflinkd: 'bi bi-linkedin'
      },
      {
        chefimg:'assets/img/chefs/chefs-3.jpg',
        cheftitle: 'Sarah Jhonson',
        chefsubtitle: 'Sarah Jhonson',
        chefdesc : 'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.',
        cheftwitter: 'bi bi-twitter',
        cheffacbook: 'bi bi-facebook',
        chefinsta: 'bi bi-instagram',
        cheflinkd: 'bi bi-linkedin'
      },
    ];
   }

  ngOnInit() {
  }

}

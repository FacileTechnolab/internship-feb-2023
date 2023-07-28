import { HttpClient } from '@angular/common/http';

import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-Breadcrumb',
  templateUrl: './Breadcrumb.component.html',
  styleUrls: ['./Breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
 @Input() crump:any;

  constructor( private http:HttpClient) { }

  ngOnInit() {
 console.log(this.crump);
   

  }

}

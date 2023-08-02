import { HttpClient } from '@angular/common/http';

import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Breadcrumb',
  templateUrl: './Breadcrumb.component.html',
  styleUrls: ['./Breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
 @Input() crump:any;

detail:any;
url3:string="/assets/jsondata/innercontact.json"
  constructor( private http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
 console.log(this.crump);

 this.http.get(this.url3).subscribe(result=>{
  this.detail=result;

})



  }

}

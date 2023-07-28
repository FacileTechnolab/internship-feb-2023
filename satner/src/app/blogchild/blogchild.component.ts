import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogchild',
  templateUrl: './blogchild.component.html',
  styleUrls: ['./blogchild.component.css']
})
export class BlogchildComponent implements OnInit {

  url: string = "/assets/json/blogrightcategory.json";
  @Input() child: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //console.log(this.child);

  }

}

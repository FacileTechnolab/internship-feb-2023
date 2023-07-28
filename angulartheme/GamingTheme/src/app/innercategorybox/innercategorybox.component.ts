import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-innercategorybox',
  templateUrl: './innercategorybox.component.html',
  styleUrls: ['./innercategorybox.component.css']
})
export class InnercategoryboxComponent implements OnInit {
@Input()categories:any;

  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfoliochild',
  templateUrl: './portfoliochild.component.html',
  styleUrls: ['./portfoliochild.component.css']
})
export class PortfoliochildComponent implements OnInit {
  url: string = "/assets/json/portchild.json";
  @Input() pchild: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.pchild);

  }

}

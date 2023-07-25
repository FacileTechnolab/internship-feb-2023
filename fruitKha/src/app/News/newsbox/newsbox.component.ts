import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-newsbox',
  templateUrl: './newsbox.component.html',
  styleUrls: ['./newsbox.component.css']
})
export class NewsboxComponent implements OnInit {
url: string="assets/json/OurNews.json"
@Input ()  news1:any

  constructor() { }

  ngOnInit() {
  }

}

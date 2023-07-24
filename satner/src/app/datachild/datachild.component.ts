import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datachild',
  templateUrl: './datachild.component.html',
  styleUrls: ['./datachild.component.css']
})
export class DatachildComponent implements OnInit {
  url: string = "/assets/json/database.json";
  constructor(private http: HttpClient) { }
  @Input() datachild: any;
  ngOnInit() {

    console.log(this.datachild);

  }

}

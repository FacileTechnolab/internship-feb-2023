import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ourteambox',
  templateUrl: './ourteambox.component.html',
  styleUrls: ['./ourteambox.component.css']
})
export class OurteamboxComponent implements OnInit {

  @Input () ourteam:any
  constructor() { }

  ngOnInit() {
  }

}

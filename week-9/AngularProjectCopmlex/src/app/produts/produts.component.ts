import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent {
 @Input() heros: any;
}

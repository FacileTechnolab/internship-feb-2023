import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class';
}

class Point{
  x:number;
  y:number;
  draw()
  {
    console.log('X:'+ this.x + 'Y:'+ this.y);
  }
  getDistance()
  {

  }

}
let point=new Point();
point.x=1;
point.y=2;
point.draw();
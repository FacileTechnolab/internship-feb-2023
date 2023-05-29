import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// class Point{
//   x:number | undefined;
//   y:number | undefined;
//   draw()
//   {
//     console.log('X:'+ this.x + 'Y:'+ this.y);
//   }
//   getDistance()
//   {

//   }

// }
// let point=new Point();
// point.x=1;
// point.y=2;
// point.draw();
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ViewspeakerComponent } from './Speakers/viewspeaker/viewspeaker.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'spekarinfo',
    component: ViewspeakerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ChefComponent } from './chef/chef.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'menu',
    component:MenuComponent
  },
  {
    path: 'chef',
    component:ChefComponent
  },

  {
    path: 'event',
    component:EventsComponent
  },
  {
    path: 'gallery',
    component:EventsComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Partners',
    component:PartnersComponent
  },
  {
    path:'Marketing',
    component:MarketingComponent
  },
  {
    path:'Faq',
    component:FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

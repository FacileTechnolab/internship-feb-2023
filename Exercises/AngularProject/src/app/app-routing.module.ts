import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FaqComponent } from './faq/faq.component';
const routes: Routes = [
   
  { path: '', 
    redirectTo: '/home',
    pathMatch: 'full',
    
},
{
  path : 'home',
  component:HomeComponent
},

      {
        path : 'partner',
        component:PartnersComponent
      },
      {
        path : 'marketing',
        component:MarketingComponent
      },
      {
        path : 'faq',
        component:FaqComponent
      },
    
    
  
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

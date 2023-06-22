
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutusComponent } from './aboutus/aboutus.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contacts', component: ContactsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { EventsComponent } from './Events/Events.component';
import { MembershipComponent } from './Membership/Membership.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventDetailsComponent } from './EventDetails/EventDetails.component';
import { EventListingComponent } from './EventListing/EventListing.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:HomeComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { MediaComponent } from './media/media.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CitiesComponent } from './cities/cities.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CommentsComponent } from './comments/comments.component';
import { SponsorshipComponent } from './Sponsorship/Sponsorship.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  { path:"home",
  component:HomeComponent
},
  { path:"media",component:MediaComponent
},
  { path:"tickets",component:TicketsComponent},
  { path:"cities",component:CitiesComponent},
  { path:"faqs",component:FaqsComponent},
  { path:"comments",component:CommentsComponent},
  { path:"sponsorship",component:SponsorshipComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

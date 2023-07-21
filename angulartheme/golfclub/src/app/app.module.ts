import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Home/Home.component';
import { AboutComponent } from './about/about.component';
import { MembershipComponent } from './Membership/Membership.component';
import { EventsComponent } from './Events/Events.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventDetailsComponent } from './EventDetails/EventDetails.component';
import { EventListingComponent } from './EventListing/EventListing.component';
import{InnerhomeComponent}from './Home/innerhome/innerhome.component';
import { Innermembership1Component } from './Membership/innermembership1/innermembership1.component';
import { Innermembeership2Component } from './Membership/innermembeership2/innermembeership2.component';
import { InnerEventComponent } from './Events/innerEvent/innerEvent.component';
@NgModule({
  declarations: [									
    AppComponent,
    InnerEventComponent ,
      HeaderComponent,
      Innermembership1Component,
      FooterComponent,
      InnerhomeComponent,
      HomeComponent,
      AboutComponent,
      MembershipComponent,
      EventsComponent,
      ContactusComponent,
      EventDetailsComponent,
      EventListingComponent,
      Innermembeership2Component 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

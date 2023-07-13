import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './About/About.component';
import { SpeakersComponent } from './Speakers/Speakers.component';
import { ScheduleComponent } from './Schedule/Schedule.component';
import { VenueComponent } from './Venue/Venue.component';
import { HotelsComponent } from './Hotels/Hotels.component';
import { GalleryComponent } from './Gallery/Gallery.component';
import { SponsorsComponent } from './Sponsors/Sponsors.component';
import { ContactComponent } from './Contact/Contact.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HotelreviewComponent } from './hotelreview/hotelreview.component';
import { EventtimeComponent } from './Eventtime/Eventtime.component';
import { GalleryinnerComponent } from './galleryinner/galleryinner.component';
import { TicketComponent } from './About/Ticket/Ticket.component';
import { FAQComponent } from './FAQ/FAQ.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SpeakersComponent,
    ScheduleComponent,
    VenueComponent,
    HotelsComponent,
    GalleryComponent,
    SponsorsComponent,
    ContactComponent,
    HotelreviewComponent,
    EventtimeComponent,
    GalleryinnerComponent,
    TicketComponent,
      FAQComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbNavModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

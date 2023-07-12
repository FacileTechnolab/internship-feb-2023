import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
      GalleryinnerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

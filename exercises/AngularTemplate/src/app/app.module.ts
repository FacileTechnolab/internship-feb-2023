import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CitiesComponent } from './cities/cities.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CommentsComponent } from './comments/comments.component';
import { SponsorshipComponent } from './Sponsorship/Sponsorship.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{CarouselModule} from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MediaComponent,
    TicketsComponent,
    CitiesComponent,
    FaqsComponent,
    CommentsComponent,
    SponsorshipComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

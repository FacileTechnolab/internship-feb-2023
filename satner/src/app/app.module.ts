import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './Services/Services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ElementsComponent } from './elements/elements.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { BlogComponent } from './Blog/Blog.component';
import { BlogdetailsComponent } from './Blogdetails/Blogdetails.component';
import { ContactComponent } from './Contact/Contact.component';
import { IntroductionComponent } from './Introduction/Introduction.component';
import { IconeComponent } from './Icone/Icone.component';
import { IconMainComponent } from './Icon-main/Icon-main.component';
import { BannerComponent } from './Banner/Banner.component';
import { ServiceofferComponent } from './Serviceoffer/Serviceoffer.component';
import { ServicechildComponent } from './servicechild/servicechild.component';
import { SlidermainComponent } from './Slidermain/Slidermain.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderchildComponent } from './Slidermain/sliderchild/sliderchild.component';
import { UpdateComponent } from './Update/Update.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ElementsComponent,
    PortfolioDetailsComponent,
    BlogComponent,
    BlogdetailsComponent,
    ContactComponent,
    IntroductionComponent,
    IconeComponent,
    IconMainComponent,
    BannerComponent,
    ServiceofferComponent,
    ServicechildComponent,
    SlidermainComponent,
    SliderchildComponent,
    UpdateComponent,
    TabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

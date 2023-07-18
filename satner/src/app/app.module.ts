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
      BannerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

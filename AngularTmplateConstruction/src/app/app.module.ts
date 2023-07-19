import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ServicesBoxComponent } from './services-box/services-box.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BannersliderComponent } from './bannerslider/bannerslider.component';
import { BannerimgComponent } from './bannerimg/bannerimg.component';
import { HttpClientModule} from '@angular/common/http';  
import { ConstructionsComponent } from './constructions/constructions.component';


@NgModule({
  declarations: [																	
    AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      AboutComponent,
      ServicesComponent,
      ProjectsComponent,
      BlogComponent,
      ContactComponent,
      ServicesDetailsComponent,
      BlogDetailsComponent,
      ServicesBoxComponent,
      TestimonialsComponent,
      BreadcrumbsComponent,
      BannersliderComponent,
      BannerimgComponent,
      ConstructionsComponent
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

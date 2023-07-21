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
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BannersliderComponent } from './bannerslider/bannerslider.component';
import { BannerimgComponent } from './bannerimg/bannerimg.component';
import { HttpClientModule} from '@angular/common/http';  
import { ConstructionsComponent } from './constructions/constructions.component';
import { CoustructionboxComponent } from './coustructionbox/coustructionbox.component';
import { HomeservicesComponent } from './homeservices/homeservices.component';
import { ServicesdetailsComponent } from './servicesdetails/servicesdetails.component';
import { HomesericesboxComponent } from './homesericesbox/homesericesbox.component';
import { AltservicesComponent } from './altservices/altservices.component';
import { AltserviceboxComponent } from './altservicebox/altservicebox.component';
import { HometabComponent } from './hometab/hometab.component';
import { HomenavtabComponent } from './homenavtab/homenavtab.component';
import { HometabcontentComponent } from './hometabcontent/hometabcontent.component';
import { TesiboxComponent } from './tesibox/tesibox.component';
import { HomeblogpostComponent } from './homeblogpost/homeblogpost.component';
import { HomeblogboxComponent } from './homeblogbox/homeblogbox.component';
import { StatscounterComponent } from './statscounter/statscounter.component';



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
      BlogDetailsComponent,
      TestimonialsComponent,
      BreadcrumbsComponent,
      BannersliderComponent,
      BannerimgComponent,
      ConstructionsComponent,
      CoustructionboxComponent,
      HomeservicesComponent,
      ServicesdetailsComponent,
      HomesericesboxComponent,
      AltservicesComponent,
      AltserviceboxComponent,
      HometabComponent,
      HomenavtabComponent,
      HometabcontentComponent,
      TesiboxComponent,
      HomeblogpostComponent,
      HomeblogboxComponent,
      StatscounterComponent
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

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
import { HomeblogpostComponent } from './homeblogpost/homeblogpost.component';
import { HomeblogboxComponent } from './homeblogbox/homeblogbox.component';
import { StatscounterComponent } from './statscounter/statscounter.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurteamboxComponent } from './ourteambox/ourteambox.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestimonialsComponent } from './about/testimonials/testimonials.component';
import { TestiboxComponent } from './testibox/testibox.component';
import { Altservices2Component } from './altservices2/altservices2.component';
import { Altserbox2Component } from './altserbox2/altserbox2.component';
import { StatcountboxComponent } from './statcountbox/statcountbox.component';
import { ServicescardComponent } from './servicescard/servicescard.component';
import { ServicescardboxComponent } from './servicescardbox/servicescardbox.component';
import { ServidetasidemenuComponent } from './servidetasidemenu/servidetasidemenu.component';
import { ServcesdetaillistComponent } from './servcesdetaillist/servcesdetaillist.component';
import { ServdetaillistlinkComponent } from './servdetaillistlink/servdetaillistlink.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { ContactinfoboxComponent } from './contactinfobox/contactinfobox.component';


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
      HomeblogpostComponent,
      HomeblogboxComponent,
      StatscounterComponent,
      OurteamComponent,
      OurteamboxComponent,
      TestimonialsComponent,
      TestiboxComponent,
      Altservices2Component,
      Altserbox2Component,
      StatcountboxComponent,
      ServicescardComponent,
      ServicescardboxComponent,
      ServidetasidemenuComponent,
      ServcesdetaillistComponent,
      ServdetaillistlinkComponent,
      ContactinfoComponent,
      ContactinfoboxComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

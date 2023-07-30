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
import { ServicescardComponent } from './servicescard/servicescard.component';
import { ServicescardboxComponent } from './servicescardbox/servicescardbox.component';
import { ServidetasidemenuComponent } from './servidetasidemenu/servidetasidemenu.component';
import { ServcesdetaillistComponent } from './servcesdetaillist/servcesdetaillist.component';
import { ServdetaillistlinkComponent } from './servdetaillistlink/servdetaillistlink.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { ContactinfoboxComponent } from './contactinfobox/contactinfobox.component';
import { CommentformComponent } from './commentform/commentform.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ProjectdetailsliderComponent } from './projectdetailslider/projectdetailslider.component';
import { ProjedetasliderimgComponent } from './projedetasliderimg/projedetasliderimg.component';
import { ProjectdetailinfoComponent } from './projectdetailinfo/projectdetailinfo.component';
import { ProjectdetailsideinfoComponent } from './projectdetailsideinfo/projectdetailsideinfo.component';
import { BlogdetaiartcalComponent } from './blogdetaiartcal/blogdetaiartcal.component';
import { BlogdetailautorComponent } from './blogdetailautor/blogdetailautor.component';
import { BlogdetailautorsocialComponent } from './blogdetailautorsocial/blogdetailautorsocial.component';
import { BlogdetailcommentsComponent } from './blogdetailcomments/blogdetailcomments.component';
import { BlogdetailcommentboxComponent } from './blogdetailcommentbox/blogdetailcommentbox.component';
import { BlogdetailsidebarComponent } from './blogdetailsidebar/blogdetailsidebar.component';
import { BldesidebarcategorylistComponent } from './bldesidebarcategorylist/bldesidebarcategorylist.component';
import { BlogdetailsidebarpostComponent } from './blogdetailsidebarpost/blogdetailsidebarpost.component';
import { BlogdetailsidebartagsComponent } from './blogdetailsidebartags/blogdetailsidebartags.component';
import { OurprojectsComponent } from './ourprojects/ourprojects.component';
import { OurprojectboxComponent } from './ourprojectbox/ourprojectbox.component';
import { StatecounterboxComponent } from './statecounterbox/statecounterbox.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadermenulistComponent } from './headermenulist/headermenulist.component';
import { CountoModule }  from 'angular2-counto';

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
      ServicescardComponent,
      ServicescardboxComponent,
      ServidetasidemenuComponent,
      ServcesdetaillistComponent,
      ServdetaillistlinkComponent,
      ContactinfoComponent,
      ContactinfoboxComponent,
      CommentformComponent,
      ProjectdetailsComponent,
      ProjectdetailsliderComponent,
      ProjedetasliderimgComponent,
      ProjectdetailinfoComponent,
      ProjectdetailsideinfoComponent,
      BlogdetaiartcalComponent,
      BlogdetailautorComponent,
      BlogdetailautorsocialComponent,
      BlogdetailcommentsComponent,
      BlogdetailcommentboxComponent,
      BlogdetailsidebarComponent,
      BldesidebarcategorylistComponent,
      BlogdetailsidebarpostComponent,
      BlogdetailsidebartagsComponent,
      OurprojectsComponent,
      OurprojectboxComponent,
      StatecounterboxComponent,
      HeadermenulistComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
// CountoModule 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

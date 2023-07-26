import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/Header/Header.component';
import { FooterComponent } from './Layout/Footer/Footer.component';
import { StaticHomeComponent } from './Home/Static-home/Static-home.component';
import { SliderHomeComponent } from './Home/Slider-home/Slider-home.component';
import { HelpComponent } from './Home/Help/Help.component';
import { HttpClientModule} from '@angular/common/http'; 
import { ProductComponent } from './Home/product/product.component';
import { TestimonailComponent } from './Home/testimonail/testimonail.component';
import { AdvertisementComponent } from './Home/advertisement/advertisement.component';
import { ShopbannerComponent } from './Home/Shopbanner/Shopbanner.component';
import { OurNewsComponent } from './Home/OurNews/OurNews.component';
import { LogocarsoulComponent } from './Home/logocarsoul/logocarsoul.component';
import { OurProductComponent } from './Home/OurProduct/OurProduct.component';
import { AboutusComponent } from './About/Aboutus/Aboutus.component';
import { WhyComponent } from './About/Why/Why.component'; 
import { OurTeamComponent } from './About/OurTeam/OurTeam.component';
import { ErrorComponent } from './Page/error/error.component';
import { NotFoundeComponent } from './Page/NotFounde/NotFounde.component';
import { CartinComponent } from './Page/cartin/cartin.component';
import { CartComponent } from './Page/cart/cart.component';
import { CheckoutComponent } from './Page/checkout/checkout.component';
import { CheckoutboxComponent } from './Page/checkoutbox/checkoutbox.component';
import { ContactComponent } from './Contacts/Contact/Contact.component';
import { ContactcomeComponent } from './Contacts/Contactcome/Contactcome.component';
import { LocationComponent } from './Contacts/Location/Location.component';
import { NewComponent } from './News/new/new.component';
import { NewsboxComponent } from './News/newsbox/newsbox.component';
import { SinglenewsComponent } from './News/singlenews/singlenews.component';
import { SingleboxComponent } from './News/singlebox/singlebox.component';
import { ShopComponent } from './Shop/shop/shop.component';
import { ShopboxComponent } from './Shop/shopbox/shopbox.component';
import { SingleproductComponent} from './singleproduct/singleproduct/singleproduct.component';
import { GreenappleComponent } from './singleproduct/Greenapple/Greenapple.component';
import { RelatedproductComponent } from './singleproduct/Relatedproduct/Relatedproduct.component';
import { HelpboxComponent } from './Home/helpbox/helpbox.component';
import { OurproductBoxComponent } from './Home/OurproductBox/OurproductBox.component';
import { AdsComponent } from './Home/adsbox/ads.component';
import { OurNewsboxComponent } from './Home/OurNewsbox/OurNewsbox.component';
import { WhyboxComponent } from './About/Whybox/Whybox.component';
import { OurteamboxComponent } from './About/ourteambox/ourteambox.component';
import { ContactsboxComponent } from './Contacts/contactsbox/contactsbox.component';
import { LogoboxComponent } from './Home/logobox/logobox.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [						   
    AppComponent,
    HeaderComponent,
    FooterComponent,
      StaticHomeComponent,
      SliderHomeComponent,
      HelpComponent,    
      ProductComponent,
      TestimonailComponent,
      AdvertisementComponent,      
      ShopbannerComponent,
      OurNewsComponent,
      LogocarsoulComponent,
      OurProductComponent,
      AboutusComponent,
      WhyComponent,
      OurTeamComponent,
      ErrorComponent,
      NotFoundeComponent,
      CartComponent,
      CartinComponent,
      CheckoutComponent,
      CheckoutboxComponent,
      ContactComponent,
      ContactcomeComponent,
      LocationComponent,
      NewComponent,
      NewsboxComponent,
      SingleboxComponent,
      SinglenewsComponent, 
      ShopComponent,
      ShopboxComponent ,
      SingleproductComponent,
      GreenappleComponent,
      RelatedproductComponent,
      HelpboxComponent,
      OurproductBoxComponent,
      AdsComponent,
      OurNewsboxComponent,
      WhyboxComponent,
     OurteamboxComponent,
     ContactsboxComponent,
     LogoboxComponent
 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

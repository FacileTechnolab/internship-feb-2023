
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/Header/Header.component';
import { FooterComponent } from './Layout/Footer/Footer.component';
import { StaticHomeComponent } from './Static-home/Static-home.component';
import { HelpComponent } from './Help/Help.component';
import { HttpClientModule} from '@angular/common/http'; 
import { ProductComponent } from './product/product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestimonailComponent } from './testimonail/testimonail.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ShopbannerComponent } from './Shopbanner/Shopbanner.component';
import { OurNewsComponent } from './OurNews/OurNews.component';
import { LogocarsoulComponent } from './logocarsoul/logocarsoul.component';
import { OurProductComponent } from './OurProduct/OurProduct.component';

@NgModule({
  declarations: [															
    AppComponent,
    HeaderComponent,
    FooterComponent,
      StaticHomeComponent,
      HelpComponent,
    
      ProductComponent,
      TestimonailComponent,
      AdvertisementComponent,      
      ShopbannerComponent,
      OurNewsComponent,
      LogocarsoulComponent,
      OurProductComponent
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

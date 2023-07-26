import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';

import { ShopComponent } from './Shop/Shop.component';
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { HttpClientModule} from '@angular/common/http';  

import { CategoryComponent } from './Category/Category.component';
import { LastLayoutComponent } from './LastLayout/LastLayout.component';
import { MostPlayedComponent } from './MostPlayed/MostPlayed.component';
import { TreadingComponent } from './Treading/Treading.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { InnerhomeComponent } from './innerhome/innerhome.component';
import { InnerboxComponent } from './innerbox/innerbox.component';
import { InnertreadingboxComponent } from './innertreadingbox/innertreadingbox.component';
import { InnerplayedboxComponent } from './innerplayedbox/innerplayedbox.component';
import { InnercategoryboxComponent } from './innercategorybox/innercategorybox.component';
import { BreadcrumbComponent } from './Breadcrumb/Breadcrumb.component';

import { InnershopboxComponent } from './innershopbox/innershopbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailstabComponent } from './detailstab/detailstab.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [					
    AppComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      InnerhomeComponent ,
      InnertreadingboxComponent,
      CategoryComponent,
      LastLayoutComponent ,
      InnerplayedboxComponent,
      InnercategoryboxComponent,
      ShopComponent,
      MostPlayedComponent,
      InnerboxComponent,
      TreadingComponent,
      ProductDetailsComponent,
      ContactUsComponent,
      BreadcrumbComponent,
      InnershopboxComponent,
      DetailstabComponent,
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule, FormsModule,
    ReactiveFormsModule

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

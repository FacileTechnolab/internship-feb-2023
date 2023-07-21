import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';

import { ShopComponent } from './Shop/Shop.component';
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { HttpClientModule} from '@angular/common/http';  

import { CategoryComponent } from './Home/Category/Category.component';
import { LastLayoutComponent } from './Home/LastLayout/LastLayout.component';
import { MostPlayedComponent } from './Home/MostPlayed/MostPlayed.component';
import { TreadingComponent } from './Home/Treading/Treading.component';
import { HeaderComponent } from './Layout/Header/Header.component';
import { FooterComponent } from './Layout/Footer/Footer.component';
import { InnerhomeComponent } from './Home/innerhome/innerhome.component';
import { InnerboxComponent } from './Home/innerbox/innerbox.component';
import { InnertreadingboxComponent } from './Home/Treading/innertreadingbox/innertreadingbox.component';
import { InnerplayedboxComponent } from './Home/MostPlayed/innerplayedbox/innerplayedbox.component';
import { InnercategoryboxComponent } from './Home/Category/innercategorybox/innercategorybox.component';
import { BreadcrumbComponent } from './Breadcrumb/Breadcrumb.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { InnershopboxComponent } from './Shop/innershopbox/innershopbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






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
      InnershopboxComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule
   
//  BreadcrumbModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

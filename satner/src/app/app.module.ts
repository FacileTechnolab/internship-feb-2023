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
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TabchildComponent } from './tabs/tabchild/tabchild.component';

import { TabsComponent } from './tabs/tabs.component';

import { UpdateComponent } from './Update/Update.component';
import { CountryComponent } from './elements/country/country.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerychildComponent } from './gallerychild/gallerychild.component';
import { PortfoliochildComponent } from './portfoliochild/portfoliochild.component';
import { BlogcategoryComponent } from './blogcategory/blogcategory.component';
import { SlidermainComponent } from './Slidermain/Slidermain.component';
import { BlogareaComponent } from './Blogarea/Blogarea.component';
import { BlogmainComponent } from './blogmain/blogmain.component';
import { BlogrightchildComponent } from './blogrightchild/blogrightchild.component';
import { BlogrightmainComponent } from './blogrightmain/blogrightmain.component';
import { BlogrightcategoryComponent } from './blogrightcategory/blogrightcategory.component';
import { BlogchildComponent } from './blogchild/blogchild.component';
import { BlogtechComponent } from './blogtech/blogtech.component';
import { BlogtechmainComponent } from './blogtechmain/blogtechmain.component';
import { FoodchildComponent } from './foodchild/foodchild.component';
import { FoodmainComponent } from './foodmain/foodmain.component';
import { DatachildComponent } from './datachild/datachild.component';
import { DatamainComponent } from './datamain/datamain.component';
import { SymbolchildComponent } from './symbolchild/symbolchild.component';
import { SymbolmainComponent } from './symbolmain/symbolmain.component';
import { CommentComponent } from './comment/comment.component';
import { CommentchildComponent } from './commentchild/commentchild.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { SliderchildComponent } from './sliderchild/sliderchild.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
    BlogcategoryComponent,
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
    TabchildComponent,

    TabsComponent,

    UpdateComponent,
    CountryComponent,
    GalleryComponent,
    GallerychildComponent,
    PortfoliochildComponent,
    SlidermainComponent,
    BlogareaComponent,
    BlogmainComponent,
    BlogrightchildComponent,
    BlogrightmainComponent,
    BlogrightcategoryComponent,
    BlogchildComponent,
    BlogtechComponent,
    BlogtechmainComponent,
    FoodchildComponent,
    FoodmainComponent,
    DatachildComponent,
    DatamainComponent,
    SymbolchildComponent,
    SymbolmainComponent,
    CommentComponent,
    CommentchildComponent,
    ContactinfoComponent,
    SliderchildComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

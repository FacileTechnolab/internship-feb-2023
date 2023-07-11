import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { ChefComponent } from './chef/chef.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [									
    AppComponent,
      HeaderComponent,
      HomeComponent,
      FooterComponent,
      AboutComponent,
      MenuComponent,
      EventsComponent,
      ChefComponent,
      GalleryComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

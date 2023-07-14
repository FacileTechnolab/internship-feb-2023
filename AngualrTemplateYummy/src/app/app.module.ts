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
import { WhychooseyummyComponent } from './whychooseyummy/whychooseyummy.component';
import { CounterComponent } from './counter/counter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BookatableComponent } from './bookatable/bookatable.component';
import { WhychooseyummyBoxComponent} from './whychooseyummybox/whychooseyummybox.component';
import { HttpClientModule} from '@angular/common/http';  
import { ChefboxComponent } from './chefbox/chefbox.component';
import { EventsboxComponent } from './eventsbox/eventsbox.component';
import { CounterpartComponent } from './counterpart/counterpart.component';
@NgModule({
  declarations: [																	
    AppComponent,
      HeaderComponent,
      HomeComponent,
      WhychooseyummyBoxComponent,
      FooterComponent,
      AboutComponent,
      MenuComponent,
      EventsComponent,
      ChefComponent,
      GalleryComponent,
      ContactComponent,
      WhychooseyummyComponent,
      CounterComponent,
      TestimonialsComponent,
      BookatableComponent,
      ChefboxComponent,
      EventsboxComponent,
      CounterpartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
    

    
  ],
  providers: [   HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

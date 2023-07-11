import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { HeaderComponent } from './Layout/Header/Header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { AboutComponent } from './About/About.component';
import { ServiceComponent } from './Service/Service.component';

@NgModule({
  declarations: [					
    AppComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      AboutComponent,
      ServiceComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/Header/Header.component';
import { FooterComponent } from './Layout/Footer/Footer.component';
import { StaticHomeComponent } from './Static-home/Static-home.component';
import { HelpComponent } from './Help/Help.component';
import { OurproductsComponent } from './Ourproducts/Ourproducts.component';
import { OurproductBoxComponent } from './OurproductBox/OurproductBox.component';
import { HttpClientModule} from '@angular/common/http'; 

@NgModule({
  declarations: [					
    AppComponent,
    HeaderComponent,
    FooterComponent,
      StaticHomeComponent,
      HelpComponent,
      OurproductsComponent,
      OurproductBoxComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

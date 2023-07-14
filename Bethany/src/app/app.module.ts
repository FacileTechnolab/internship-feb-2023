import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { HeaderComponent } from './Layout/Header/Header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { AboutComponent } from './About/About.component';
import { ServiceComponent } from './Service/Service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestingComponent } from './Testing/Testing.component';
import { TeamComponent } from './Team/Team.component';
import { ContactComponent } from './Contact/Contact.component';
import { TeamboxComponent } from './Teambox/Teambox.component';
import { HttpClientModule} from '@angular/common/http';
import { TestingBoxComponent } from './TestingBox/TestingBox.component';
import { ServiceBoxComponent } from './ServiceBox/ServiceBox.component';
import { ClientComponent } from './Client/Client.component';
import { WhyComponent } from './Why/Why.component';
import { WhyboxComponent } from './Whybox/Whybox.component';
import { CalltoactionComponent } from './calltoaction/calltoaction.component';
import { ClientBoxComponent } from './ClientBox/ClientBox.component';






@NgModule({
  declarations: [																									
    AppComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      AboutComponent,
      ServiceComponent,
      PortfolioComponent,
      TestingComponent,
      TeamComponent,
      ContactComponent,
      TeamboxComponent,
      TestingBoxComponent,
      ServiceBoxComponent,
      ClientComponent,
      WhyComponent,
      WhyboxComponent,
      CalltoactionComponent,
      ClientBoxComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/Header/Header.component';
import { FooterComponent } from './Layout/Footer/Footer.component';
import { HomeComponent } from './Home/Home.component';
import { ClientComponent } from './Client/client.component';
import { ContactsComponent } from './Contacts/Contacts.component';
import { ClientboxComponent } from './clientbox/clientbox.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './About/About.component';
import { TimingComponent } from './Timing/Timing.component';
import { WhyComponent } from './why/why.component';
import { WhyboxComponent } from './whybox/whybox.component';
import { CalltoactionComponent } from './Calltoaction/Calltoaction.component';
import { ServiceComponent } from './Service/Service.component';
import { ServiceboxComponent } from './servicebox/servicebox.component';
import { PortfolioComponent } from './Portfolio/Portfolio.component';
import { PortfolioboxComponent } from './portfoliobox/portfoliobox.component';
import { TeamComponent } from './Team/Team.component';
import { TeamboxComponent } from './teambox/teambox.component';
import { TestingComponent } from './Testing/Testing.component';
import { TestingboxComponent } from './testingbox/testingbox.component';
import { PortfolioinnerComponent } from './portfolioinner/portfolioinner.component';
import { PortfoliotabComponent } from './portfoliotab/portfoliotab.component';

@NgModule({
  declarations: [																			
    AppComponent,
    HeaderComponent,
    FooterComponent,
      HomeComponent,
      ClientComponent,
      ContactsComponent,
      ClientboxComponent,
      AboutComponent,
      TimingComponent,
      WhyComponent,
      WhyboxComponent,
      CalltoactionComponent,
      ServiceComponent,
      ServiceboxComponent,
      PortfolioComponent,
      PortfolioboxComponent,
      TeamComponent,
      TeamboxComponent,
      TestingComponent,
      TestingboxComponent,
      PortfolioinnerComponent,
      PortfoliotabComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

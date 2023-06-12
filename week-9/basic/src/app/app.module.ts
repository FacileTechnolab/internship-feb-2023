import { AuthorsModule } from './authors/authors.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutherComponent } from './auther/auther.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from '@angular/material/button'
import{MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CustomStyleDirective } from './custom-style.directive';



@NgModule({
  declarations: [
    AppComponent,
    AutherComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    ChildComponent,
    CustomStyleDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorsModule,
    FormsModule,
    NgbModule,
    NgFor, 
    NgbAlertModule, BrowserAnimationsModule,
    MatButtonModule,MatSliderModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
// import { FooterComponent } from './footer/footer.component';
// import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

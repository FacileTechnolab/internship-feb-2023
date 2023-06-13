import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { UserComponent } from './user/user.component';
import { ProdutsComponent } from './produts/produts.component';
import { AuthorComponent } from './author/author.component';
import { CustomPipe } from './custom.pipe';
import { AdminComponent } from './admin/admin.component';
import { RoutuserComponent } from './routuser/routuser.component';
import { PageNfComponent } from './page-nf/page-nf.component';
import { CustomstyleDirective } from './customstyle.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProdutsComponent,
    AuthorComponent,
    CustomPipe,
    AdminComponent,
    RoutuserComponent,
    PageNfComponent,
    CustomstyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

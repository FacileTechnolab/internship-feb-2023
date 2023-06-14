import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomstyleDirective } from './customstyle.directive';
import{UsersService} from './users.service'
import{UserServiceService}from './user-service.service'
import {HttpClientModule} from '@angular/common/http';
import { ModelcComponent } from './app/model/modelc/modelc.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminComponent,
    PageNotFoundComponent,
    CustomstyleDirective,
    ModelcComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

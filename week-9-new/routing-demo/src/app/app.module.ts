//import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive';
import {  HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './user/login/login.component';
// import { ListComponent } from './user/list/list.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PageNotFoundComponent,
    CustomStyleDirective,
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

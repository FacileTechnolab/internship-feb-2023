import { UsersModule } from './users/users.module';
import {AdminModule} from './admin/admin.module';
import {ProductModule} from './product/product.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AdminModule,
    ProductModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component'
import { UserModule } from './user/user.module'
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { LazyModule } from './lazy/lazy.module';
import { PogoModule } from './pogo/pogo.module';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminlistComponent,
    UserlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    AdminModule,
    UsersModule,
    LazyModule,
    PogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

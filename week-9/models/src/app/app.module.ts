import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelEmployeeComponent } from './model-employee/model-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{UsersModule} from './users/users.module'
import{AdminModule} from './admin/admin.module'
import{UserModule}from './user/user.module'

@NgModule({
  declarations: [
    AppComponent,
    ModelEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,UsersModule,AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

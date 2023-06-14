import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from './register/register.component';
import { List1Component } from './list/list1.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'list1', component: List1Component },
      { path: 'register1', component: RegisterComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

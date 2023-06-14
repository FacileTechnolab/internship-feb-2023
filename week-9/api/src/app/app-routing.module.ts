
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './user/list/list.component';
import { LoginComponent } from './user/login/login.component';
import { List1Component } from './admin/list/list1.component';
import { RegisterComponent } from './admin/register/register.component'
import { PogoModule } from './pogo/pogo.module'

const routes: Routes = [
  // { path: 'list', component: ListComponent },
  // { path: 'login', component: LoginComponent },
  {
    path: 'Lazy', loadChildren: () => import('./lazy/lazy.module')
      .then(mod => mod.LazyModule)
  },
  // {
  //   path: 'Pogo', loadChildren: () => import('./pogo/pogo.module')
  //     .then(mod => mod.PogoModule)
  // }
  {
    path: 'pogo', loadChildren: () => import('./pogo/pogo.module')
      .then(v => v.PogoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

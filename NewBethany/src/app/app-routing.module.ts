import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { PortfolioinnerComponent } from './portfolioinner/portfolioinner.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent  
  },
  {
    path:'portfolioinner',
    component: PortfolioinnerComponent   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

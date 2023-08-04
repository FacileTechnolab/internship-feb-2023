import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ShopComponent } from './Shop/Shop.component';
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';

const routes: Routes = [


   {path:'',component:HomeComponent,title:'Home'},


{
  path:'Home',
component:HomeComponent ,title:'Home'},
{
  path:'Home/Home/Shop',
component:ShopComponent ,title:'Shop'},

{
  path:'Shop',
  component:ShopComponent,title:'Shop'},
  {path:'ProductDetails',component:ProductDetailsComponent  ,title:'Product Details'},
  {path:'ProductDetails/:id',component:ProductDetailsComponent ,title:'Product Details'},
  {path:'ProductDetails/:id/ProductDetails',component:ProductDetailsComponent,title:'Product Details' },
 
  {path:'Shop/ProductDetails/:id',component:ProductDetailsComponent ,title:'Product Details'},

  {path:'ContactUs',component:ContactUsComponent,title:'Contact' },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

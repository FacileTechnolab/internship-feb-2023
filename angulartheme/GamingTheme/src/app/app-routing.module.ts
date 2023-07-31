import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ShopComponent } from './Shop/Shop.component';
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';

const routes: Routes = [
  {path:'**',component:HomeComponent},

   {path:'',component:HomeComponent},


{
  path:'Home',
component:HomeComponent},

{
  path:'Shop',
  component:ShopComponent},
  {path:'ProductDetails',component:ProductDetailsComponent },
  {path:'ContactUs',component:ContactUsComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

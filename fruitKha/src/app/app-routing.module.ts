import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticHomeComponent } from './Home/Static-home/Static-home.component';
import { AboutusComponent } from './About/Aboutus/Aboutus.component';
import { NotFoundeComponent } from './Page/NotFounde/NotFounde.component';
import { CartComponent } from './Page/cart/cart.component';
import { CheckoutComponent } from './Page/checkout/checkout.component';
import { ContactComponent } from './Contacts/Contact/Contact.component'
import { ContactcomeComponent } from './Contacts/Contactcome/Contactcome.component';
import { NewComponent } from './News/new/new.component';
import { SinglenewsComponent } from './News/singlenews/singlenews.component';
import { ShopboxComponent } from './Shop/shopbox/shopbox.component';
import { ShopComponent } from './Shop/shop/shop.component';
import { SingleproductComponent } from './singleproduct/singleproduct/singleproduct.component';
import { SliderHomeComponent } from './Home/Slider-home/Slider-home.component';

const routes: Routes = [
  {
    path: '',
    component: StaticHomeComponent  
  },
  {
    path: 'slider',
    component: SliderHomeComponent 
  },
  {
    path:'about',
    component: AboutusComponent   
  },
  {
    path:'page',
    component: NotFoundeComponent 
  },
  {
    path:'cart',
    component: CartComponent 
  },
  {
    path:'checkout',
    component: CheckoutComponent
  },
  {
    path:'contactcome',
    component: ContactcomeComponent
  },
  {
    path:'news',
    component: NewComponent
  },
  {
    path:'singlenews',
    component: SinglenewsComponent
  },  
  {
    path:'shop',
    component: ShopComponent
  },
  {
    path:'singleproduct',
    component: SingleproductComponent
  },

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }

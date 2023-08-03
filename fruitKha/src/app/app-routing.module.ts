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
import { Title } from '@angular/platform-browser';
import { ErrorComponent } from './Page/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: StaticHomeComponent  
  },
  {
    path: 'slider',
    component: SliderHomeComponent,
    title : 'slider version' 
  },
  {
    path:'about',
    component: AboutusComponent,
    title : 'About'   
  },
  {
    path:'page',
    component: NotFoundeComponent,
    title : '404!'
  
  },
  

  {
    path:'cart',
    component: CartComponent,
    title : 'Cart'
  },
  {
    path:'cart/:id',
    component: CartComponent,
    title : 'Cart'
  },
  {
    path:'checkout',
    component: CheckoutComponent,
    title : 'Checkout'
  },
  {
    path:'contactcome',
    component: ContactcomeComponent,
    title :'Contact '
  },
  {
    path:'news',
    component: NewComponent,
    title : 'News'
  },
  {
    path:'singlenews',
    component: SinglenewsComponent,
    title :'SingleNews'
  },  
  {
    path:'shop',
    component: ShopComponent,
    title: 'Shop'
  },
  {
    path:'singleproduct',
    component: SingleproductComponent,
    title: 'SingleProduct'
  },
  {
    path:'singleproduct/:id',
    component: SingleproductComponent,
    title: 'SingleProduct'
  },

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }

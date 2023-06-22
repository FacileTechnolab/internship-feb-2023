import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeaturesComponent } from './features/features.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrincingComponent } from './princing/princing.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },

  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'princing',
    component: PrincingComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

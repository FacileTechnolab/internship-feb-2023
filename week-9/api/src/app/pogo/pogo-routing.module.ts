import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { OutoutComponent } from './outout/outout.component';
const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PogoRoutingModule { }

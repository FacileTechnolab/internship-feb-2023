import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PogoRoutingModule } from './pogo-routing.module';
import { InputComponent } from './input/input.component';
import { OutoutComponent } from './outout/outout.component';


@NgModule({
  declarations: [
    InputComponent,
    OutoutComponent
  ],
  imports: [
    CommonModule,
    PogoRoutingModule
  ]
})
export class PogoModule { }

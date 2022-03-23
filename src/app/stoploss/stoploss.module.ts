import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoplossComponent } from './stoploss.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StoplossComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StoplossModule { }

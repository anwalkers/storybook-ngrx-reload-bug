import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxTestComponent } from './ngrx-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgrxTestComponent],
  exports: [NgrxTestComponent]
})
export class NgrxTestModule { }

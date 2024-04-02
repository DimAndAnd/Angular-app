import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedDatePipe } from './pipes/elapsedDate.pipe';
import { DatePipe } from './pipes/date.pipe';



@NgModule({
  declarations: [
    EmailDirective,
    SlicePipe,
    ElapsedDatePipe,
    DatePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailDirective, SlicePipe, ElapsedDatePipe, DatePipe,
  ]
})
export class SharedModule { }

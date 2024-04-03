import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedDatePipe } from './pipes/elapsedDate.pipe';
import { DatePipe } from './pipes/date.pipe';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    EmailDirective,
    SlicePipe,
    ElapsedDatePipe,
    DatePipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailDirective, SlicePipe, ElapsedDatePipe, DatePipe, LoaderComponent,
  ]
})
export class SharedModule { }

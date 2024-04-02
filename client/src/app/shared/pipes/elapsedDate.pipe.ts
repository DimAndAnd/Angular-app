import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedDate'
})
export class ElapsedDatePipe implements PipeTransform {

  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).fromNow();
  }

}

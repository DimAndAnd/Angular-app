import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: string, ...args: unknown[]): unknown {
    return moment().format('d.MM.YYYY, h:mm');
  }

}

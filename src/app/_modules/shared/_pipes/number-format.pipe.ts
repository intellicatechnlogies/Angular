import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number | string ,): string | number {
    if (!value) {
      return value;
    }
    return value.toLocaleString('en-IN');
  }

}

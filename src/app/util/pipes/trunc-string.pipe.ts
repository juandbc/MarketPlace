import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncString'
})
export class TruncStringPipe implements PipeTransform {

  transform(value: string, end: number): string {
    return value.substring(0, end) + '...';
  }

}

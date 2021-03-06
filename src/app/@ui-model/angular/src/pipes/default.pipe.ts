import {Pipe, PipeTransform} from '@angular/core';
import {isEmpty} from '@ui-model/common';

@Pipe({
  name: 'default'
})
export class DefaultPipe<T> implements PipeTransform {
  transform(value: any, defaultValue: T): T {
    return !isEmpty(value) ? value : defaultValue;
  }
}

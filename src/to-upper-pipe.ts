import {Pipe} from 'angular2/core';

@Pipe({
  name: 'toUpper'
})
export class ToUpperPipe {
  transform(value) {
    return value.toUpperCase();
  }
}

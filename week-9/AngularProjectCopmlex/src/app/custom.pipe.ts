import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // name: 'square'
  name : 'power'
})
export class CustomPipe implements PipeTransform {

  // transform(value: number): number {
  //   return value * value;
  // }

  // parameter-pass
  transform(value: number, exponent: number): number {
    return Math.pow(value, exponent);
  }

}

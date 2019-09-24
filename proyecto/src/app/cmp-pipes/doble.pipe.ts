import { Pipe, PipeTransform } from '@angular/core';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {
  
  transform(value: number, por: number = 2, n?: number, ...nums: Array<number>): number {
    if (n != undefined) {
      let suma = nums.reduce((acc, n) => { return acc+=n }, 0);
      return value * por * n + suma;
    }
    return value * por;
  }

}

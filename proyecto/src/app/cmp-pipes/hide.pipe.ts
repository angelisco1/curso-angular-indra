import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hide'
})
export class HidePipe implements PipeTransform {

  transform(value: string, palabras: string[], replaceBy: string = '*'): any {
    return palabras.reduce((acc, palabra) => {
      return acc.replace(new RegExp(palabra, 'gi'), replaceBy.repeat(palabra.length));
    }, value);
  }

}

import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {
  @Input('appMarcar') colorFondo;
  colorInicial = 'white';
  @HostBinding('style.backgroundColor') colorAplicado: string = 'orange';

  constructor() {
  }

  ngOnInit() {
    if (!this.colorFondo) {
      this.colorFondo = 'black'
    }
  }

  @HostListener('mouseover') onMouseOver() {
    console.log('ColorFondo', this.colorFondo)
    this.colorAplicado = this.colorFondo;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorAplicado = this.colorInicial;
  }

}

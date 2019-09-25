import { Directive, HostBinding } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {
  @HostBinding('style.color') color;
  intervalId: NodeJS.Timer;

  constructor() { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      console.log('Blink!')
      let num = Math.floor(Math.random() * 256);
      this.color = `rgb(${num}, ${num}, ${num})`
    }, 300);

  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

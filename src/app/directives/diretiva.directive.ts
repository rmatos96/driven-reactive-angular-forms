import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[diretiva]'
})
export class DiretivaDirective {

  constructor(
    private el:ElementRef
  ) {
    this.el.nativeElement.style.width='100%'
    this.el.nativeElement.style.height='30px'
    this.el.nativeElement.style.color='black'
    this.el.nativeElement.style.marginBottom='15px'
   }

}

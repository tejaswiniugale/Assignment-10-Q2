import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    
    this.renderer.setStyle(el.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(el.nativeElement,'font-weight','bold');
  }

}

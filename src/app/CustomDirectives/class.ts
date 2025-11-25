 import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
 
@Directive({
  selector: '[appClass]' 
   
})
export class AppClassDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }

   @Input('appClass') set display(value: object) {
    let entries = Object.entries(value);
    for (let [className, condition] of entries) {
      if (condition) {
        this.render.addClass(this.element.nativeElement, className);
      }
    }
  }
}

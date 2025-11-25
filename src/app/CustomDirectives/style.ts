 import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'

})
export class AppStyleDirective {
  constructor(private element: ElementRef, private render: Renderer2){}

  @Input('appStyle') set style(styles: any) {
    let styleEntries = Object.entries(styles);
console.log(styleEntries);

  for (let item of styleEntries) {
  let [cssStyle , value] = item;
  console.log(cssStyle, value);
   this.render.setStyle(this.element.nativeElement, cssStyle, value);  
      
  }
  }
}

import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'red';
  }

}

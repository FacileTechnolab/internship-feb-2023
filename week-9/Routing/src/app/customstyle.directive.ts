import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private el:ElementRef<any>) {
    el.nativeElement.style.color="red"
   }

}

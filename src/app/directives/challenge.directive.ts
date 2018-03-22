import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[challengeDirective]'
})
export class ChallengeDirective {

  @Input('error') error: boolean;

  constructor(private el: ElementRef) {}

  checkIfHasError() {
    if (this.error) {
      this.el.nativeElement.class = 'error';
    } else {
      this.el.nativeElement.class = null;
    }
  }

}

import { AfterViewInit, Directive, ElementRef, Input,Renderer } from '@angular/core';

@Directive({
  selector: '[appErrorMessages]'
})
export class ErrorMessagesDirective implements AfterViewInit {

  @Input('errors') errors: any;
  @Input('invalid') invalid: any;
  @Input('control') control: any;

  constructor(private el: ElementRef,private renderer: Renderer) {
      renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'white');
  }

  ngAfterViewInit() {
    let htmlError = '';
    if (this.invalid) {
      if (this.errors.required || this.errors.min_value_required || this.errors.max_value_required ||
          this.errors.accuracy_value_required || this.errors.min_value_required_for_accuracy ||
          this.errors.precision_value_required || this.errors.max_value_required_for_accuracy){
        htmlError += '<div>'+ this.control +' is required</div>';
      }
      if (this.errors.not_unique) {
        htmlError += '<div>'+ this.control + ' must be unique</div>';
      }
      if (this.errors.range_invalid) {
        htmlError += '<div>'+ this.control + ' has an invalid range</div>';
      }
      if (this.errors.min_value_required_for_precision) {
        htmlError += '<div>'+ this.control + ' need for range min</div>';
      }
      if (this.errors.max_value_required_for_precision) {
        htmlError += '<div>'+ this.control + ' need for range max</div>';
      }
      if (this.errors.precision_range_offset) {
        htmlError += '<div>'+ this.control + ' is out of range</div>';
      }
      if (this.errors.accuracy_range_offset) {
        htmlError += '<div>'+ this.control + ' is out of range</div>';
      }
      if (this.errors.precision_not_valid || this.errors.accuracy_not_valid) {
        htmlError += '<div>'+ this.control + ' is not a valid value</div>';
      }
      this.el.nativeElement.insertAdjacentHTML('afterbegin', htmlError);
    }
  }

}

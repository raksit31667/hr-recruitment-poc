import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[inputFilterListPlaceholder]'
})
export class InputFilterListPlaceholderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

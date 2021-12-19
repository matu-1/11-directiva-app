import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
})
export class CustomIfDirective {
  @Input() set appCustomIf(value: boolean) {
    if (value) this.viewContainer.createEmbeddedView(this.templateRef);
    else this.viewContainer.clear();
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
}

import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Directive changing (creating) the html element by outputting odd or even numbers
 * with appropriate background color based on condition
 * @author salavat
 */
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  /**
   * Changes an html element depending on condition.
   *
   * @param contidion
   */
  @Input() set appUnless(contidion: boolean) {
    if (!contidion) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}

}

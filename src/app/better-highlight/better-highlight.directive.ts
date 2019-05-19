import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';
/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Directive changing the background color of html block (element)
 * @made_by Salavat
 */
@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  /**
   * These variables can be used in html as attributes if the html
   * element marked with the selector of this directive.
   * The html element looks like :
   * <div class="col-xs-12"
   *      appBetterHighlight
   *      [defaultColor]="'red'"
   *      [highlightColor]="'green'">
   *        <p>Simple paragraph 2!</p>
   * </div>
   */
  @Input() defaultColor: string;
  @Input() highlightColor: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.defaultColor = 'transparent';
    this.highlightColor = 'yellow';
    this.backgroundColor = this.defaultColor;
  }

  /**
   * Handling of the mouse events for changing background color
   * @param eventData
   */
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}

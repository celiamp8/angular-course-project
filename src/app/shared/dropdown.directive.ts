import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  buttonClicked = false;

  @HostListener('click') toggleOpen() {

    this.buttonClicked = !this.buttonClicked;

    if (this.buttonClicked) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

}

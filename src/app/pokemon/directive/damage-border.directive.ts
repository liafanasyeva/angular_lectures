import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[damage-border]",
})
export class DamageBorderDirective {
  @Input("damage-border") damage: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.damage >= 50) {
      this.el.nativeElement.style.boxShadow = "0px 1px 10px 0px rgba(255,0,0,1)";
    }
  }
}

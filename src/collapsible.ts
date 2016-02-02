import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'collapsible',
  template: `
    <h3 (click)="toggle()">Collapsible click to open</h3>
    <div [style.display]="open ? 'block' : 'none'">
      {{content}}
    </div>
  `
})
export class Collapsible {
  @Input() content;
  @Output() opened = new EventEmitter();
  open = false;

  toggle() {
    this.open = !this.open;

    if (this.open) {
      this.opened.next(this);
    }
  }
}

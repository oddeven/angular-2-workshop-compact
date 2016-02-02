import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'collapsible',
  template: `
    <h3 (click)="toggle()">{{title}}</h3>
    <div [style.display]="open ? 'block' : 'none'">
      {{content}}
    </div>
  `
})
export class Collapsible {
  @Input() title;
  @Input() content;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();
  open = false;

  toggle() {
    this.open = !this.open;

    if (this.open) {
      this.opened.next(this);
    } else {
      this.closed.next(this);
    }
  }
}

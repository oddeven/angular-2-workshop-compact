import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'collapsible',
  template: `
    <h3 (click)="toggle()">{{title}}</h3>
    <div [style.display]="open ? 'block' : 'none'">
      <ng-content></ng-content>
    </div>
  `
})
export class Collapsible {
  @Input() title: String;
  @Output() opened: EventEmitter = new EventEmitter();
  @Output() closed: EventEmitter = new EventEmitter();
  open: Boolean = false;

  toggle() {
    this.open = !this.open;

    if (this.open) {
      this.opened.next(this);
    } else {
      this.closed.next(this);
    }
  }
}

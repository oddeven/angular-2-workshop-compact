import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'collapsible-title',
  template: `
    <h3 [style.backgroundColor]="active ? 'yellow' : null">
      <ng-content></ng-content>
    </h3>
  `
})
export class CollapsibleTitle {
  active: Boolean = false;

  toggleActive() {
    this.active = !this.active;
  }
}

@Component({
  selector: 'collapsible',
  template: `
    <h3 (click)="toggle()">
      <ng-content select="collapsible-title"></ng-content>
    </h3>
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

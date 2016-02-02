import {Component, Input, Output, EventEmitter, ContentChild} from 'angular2/core';

@Component({
  selector: 'collapsible-title',
  template: `
    <h3 [style.backgroundColor]="active ? 'yellow' : null">
      <ng-content></ng-content>
    </h3>
  `
})
export class CollapsibleTitle {
  active = false;

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
  @Input() title;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();
  @ContentChild(CollapsibleTitle) collapsibleTitle;
  open = false;

  toggle() {
    this.open = !this.open;
    this.collapsibleTitle.toggleActive();

    if (this.open) {
      this.opened.next(this);
    } else {
      this.closed.next(this);
    }
  }
}

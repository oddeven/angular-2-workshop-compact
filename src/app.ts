import {Component} from 'angular2/core';
import {Collapsible, CollapsibleTitle} from './collapsible';

@Component({
  selector: 'app',
  template: `
    <collapsible (opened)="onOpened($event)"
                 (closed)="onClosed($event)">
      <collapsible-title>I'm a title</collapsible-title>
      <p>I'm regular content that will be inserted into the collapsible body</p>
    </collapsible>
  `,
  directives: [Collapsible, CollapsibleTitle]
})
export class App {
  onOpened(collapsible) {
    console.log('Collapsible was opened', collapsible);
  }

  onClosed(collapsible) {
    console.log('Collapsible was closed', collapsible);
  }
}

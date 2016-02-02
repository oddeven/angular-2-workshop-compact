import {Component} from 'angular2/core';
import {Collapsible} from './collapsible';

@Component({
  selector: 'app',
  template: `
    <collapsible [content]="content" (opened)="onOpened($event)"></collapsible>
  `,
  directives: [Collapsible]
})
export class App {
  content = 'This is a simple collapsible content';

  onOpened(collapsible) {
    console.log('Collapsible was opened', collapsible);
  }
}

import {Component} from 'angular2/core';
import {Collapsible} from './collapsible';

@Component({
  selector: 'app',
  template: `
    <collapsible [title]="title"
                 [content]="content"
                 (opened)="onOpened($event)"
                 (closed)="onClosed($event)"></collapsible>
  `,
  directives: [Collapsible]
})
export class App {
  title = 'Simple collapsible';
  content = 'This is a simple collapsible content';

  onOpened(collapsible) {
    console.log('Collapsible was opened', collapsible);
  }

  onClosed(collapsible) {
    console.log('Collapsible was closed', collapsible);
  }
}

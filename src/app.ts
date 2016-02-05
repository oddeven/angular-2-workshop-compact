import {Component} from 'angular2/core';
import {ToUpperPipe} from './to-upper-pipe';

@Component({
  selector: 'app',
  template: `
    <p *ngFor="#message of messages; #i = index">{{i}}: {{message | toUpper}}</p>
    <input #inp type="text">
    <button (click)="addMessage(inp.value)">Add</button>
  `,
  pipes: [ToUpperPipe]
})
export class App {
  messages: Array<String>;
  constructor() {
    this.messages = ['One', 'Two', 'Three'];
  }

  addMessage(message: String) {
    this.messages.push(message);
  }
}

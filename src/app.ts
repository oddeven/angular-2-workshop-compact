import {Component} from 'angular2/core';
import {BlacklistPipe} from './blacklist-pipe';

@Component({
  selector: 'app',
  template: `
    <p *ngFor="#message of messages; #i = index; #even = even"
       [style.backgroundColor]="even ? 'gray' : null">{{i}}: {{message | blacklist}}</p>
    <input #inp type="text">
    <button (click)="addMessage(inp)">Add</button>
  `,
  pipes: [BlacklistPipe]
})
export class App {
  messages: Array<String>;
  constructor() {
    this.messages = ['One', 'Two', 'Three'];
  }

  addMessage(inputElement: HTMLInputElement) {
    this.messages.push(inputElement.value);
    inputElement.value = '';
  }
}

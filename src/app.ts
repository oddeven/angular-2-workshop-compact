import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <p>{{message}}</p>
  `
})
export class App {
  message: String = 'Hello World!';
}

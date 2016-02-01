import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'app',
  template: `
    <p>{{message}}</p>
  `
})
export class App {
  message: String  = 'Hello World!';
}

bootstrap(App);

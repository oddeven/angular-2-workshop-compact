import {Component} from 'angular2/core';
import {Calculator} from './calculator';

@Component({
  selector: 'app',
  template: `
    <calculator></calculator>
  `,
  directives: [Calculator]
})
export class App {}

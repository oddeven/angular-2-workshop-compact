import {Component, Inject} from 'angular2/core';
import {Calculator} from './calculator';
import {LogService} from './log-service';

@Component({
  selector: 'app',
  template: `
    <calculator></calculator>
  `,
  directives: [Calculator],
  providers: [LogService]
})
export class App {
  constructor(@Inject(LogService) logService: LogService) {
    logService.log('Application started');
  }
}

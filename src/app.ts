import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <input type="text"
           [value]="value"
           [attr.aria-invalid]="error"
           [class.is-valid]="!error"
           (input)="onInput($event.target.value)">
    <p [textContent]="message"
       [style.color]="error ? 'red' : 'green'"></p>
  `
})
export class App {
  value: String = '';
  message: String = 'All is fine...';
  error: Boolean = false;

  onInput(value) {
    this.value = value;
    if (this.value.length > 10) {
      this.message = 'Value is too long';
      this.error = true;
    } else {
      this.message = 'All is fine...';
      this.error = false;
    }
  }
}

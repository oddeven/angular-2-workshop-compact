import {Component} from 'angular2/core';

@Component({
  selector: 'calculator',
  template: `
    <div>
      <input #a (input)="calculate(a.value, b.value, operator.value)" type="number">
    </div>
    <div>
      <select #operator (input)="calculate(a.value, b.value, operator.value)">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
    </div>
    <div>
      <input #b (input)="calculate(a.value, b.value, operator.value)" type="number">
    </div>
    <div>
      Result: {{result}}
    </div>
  `
})
export class Calculator {
  result: Number = 0;

  calculate(a, b, operator) {

  }
}

import {Component, Inject} from 'angular2/core';
import {CalculationService} from './calculation-service';

@Component({
  selector: 'calculator',
  providers: [CalculationService],
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
  result = 0;
  calculationService;

  constructor(@Inject(CalculationService) calculationService) {
    this.calculationService = calculationService;
  }

  calculate(a, b, operator) {
    this.calculationService.methodFromOperator(operator)(+a, +b);
    this.result = this.calculationService.result;
  }
}

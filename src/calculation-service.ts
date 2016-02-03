import {Injectable} from 'angular2/core';

@Injectable()
export class CalculationService {
  result = 0;

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    this.result /= num;
  }

  methodFromOperator(operator) {
    return this[operator].bind(this);
  }
}

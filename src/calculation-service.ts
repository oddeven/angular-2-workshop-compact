import {Injectable, Inject} from 'angular2/core';
import {LogService} from './log-service';

@Injectable()
export class CalculationService {
  logService: LogService;

  constructor(@Inject(LogService) logService: LogService) {
    this.logService = logService;
  }

  add(a: Number, b: Number): Number {
    this.logService.log(`Calculating ${a} plus ${b}`);
    return a + b;
  }

  subtract(a: Number, b: Number): Number {
    this.logService.log(`Calculating ${a} minus ${b}`);
    return a - b;
  }

  multiply(a: Number, b: Number): Number {
    this.logService.log(`Calculating ${a} multiplied with ${b}`);
    return a * b;
  }

  divide(a: Number, b: Number): Number {
    this.logService.log(`Calculating ${a} divided by ${b}`);
    return a / b;
  }
}

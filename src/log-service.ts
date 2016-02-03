export class LogService {
  static globalLoggerNr: Number = 0;
  loggerNr: Number;

  constructor() {
    this.loggerNr = LogService.globalLoggerNr++;
  }

  log(message: String) {
    console.log(`Logger(${this.loggerNr}): ${message}`);
  }
}

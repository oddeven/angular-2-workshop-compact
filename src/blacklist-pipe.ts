import {Pipe} from 'angular2/core';

@Pipe({
  name: 'blacklist'
})
export class BlacklistPipe {
  blacklist: any;

  constructor() {
    this.blacklist = {
      stupid: 'nice',
      crap: 'art',
      idiot: 'genius'
    };
  }

  transform(value) {
    return value
      .split(/\s+/g)
      .map((word) => this.blacklist[word.toLowerCase()] || word)
      .join(' ');
  }
}

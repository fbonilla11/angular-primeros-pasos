import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  constructor() {}
  title: string = 'Angular component for a counter';
  counter: number = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  decreaseBy(value: number) {
    this.counter -= value;
  }

  resetCounter() {
    this.counter = 10;
  }
}

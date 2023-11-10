/* si pones a-component ya te crea todo */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  /* template por separado, pero ahora solo ponemos eso. */
  /* Se hace en el HTML */
  template: `
  <p>Counter: {{counter}}</p>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="decreaseBy(-1)">-1</button>
  <button (click)="reset(10)">RESET</button>

  `
})

export class CounterComponent implements OnInit {
  public counter: number = 10;


  increaseBy(value: number):void {
    this.counter += value;
  }
  decreaseBy(value: number):void{
    this.counter -= value;
  }

  reset(value: number):void{
    this.counter = value;
  }
  constructor() { }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-control',
  templateUrl: './count-control.component.html',
  styleUrls: ['./count-control.component.scss']
})
export class CountControlComponent implements OnInit {
  actualCount = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.actualCount++;
  }

  decrement() {
    this.actualCount--;
  }
}

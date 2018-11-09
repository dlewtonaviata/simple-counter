import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styleUrls: ['./count-display.component.scss']
})
export class CountDisplayComponent implements OnInit {
  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }

}

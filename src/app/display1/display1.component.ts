import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css'],
})
export class Display1Component implements OnInit {
  @Input() result: any;
  constructor() {}

  ngOnInit(): void {
    // console.log(`==============`);
    // console.log(this.result);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  private birthday: Date = new Date();
  private pi: Number = 3.1415926;
  private number1: Number = 2;
  private number2: Number = 3;

  constructor() { }

  ngOnInit() {
  }

}

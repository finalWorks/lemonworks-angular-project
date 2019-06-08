import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-demo',
  templateUrl: './life-demo.component.html',
  styleUrls: ['./life-demo.component.css']
})
export class LifeDemoComponent implements OnInit {

  private title: String = '';
  constructor() {
    this.title = 'Tom';
  }

  ngOnInit() {
    this.title = 'Tony';
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-attribute-bind',
  templateUrl: './dom-attribute-bind.component.html',
  styleUrls: ['./dom-attribute-bind.component.css']
})
export class DomAttributeBindComponent implements OnInit {

  public greeting: String = '';
  constructor() {
    this.greeting = 'A value';
  }

  ngOnInit() {
  }

  inputEvent(event: any) {
    // 输出DOM属性
    console.log('输出DOM属性：' + event.target.value);
    // 输出HTML属性
    console.log('输出HTML属性：' + event.target.getAttribute('value'));
  }

  clickEvent(event: any) {
    this.greeting = 'B value';
  }
}

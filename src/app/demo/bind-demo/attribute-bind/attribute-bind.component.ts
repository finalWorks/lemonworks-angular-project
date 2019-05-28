import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-bind',
  templateUrl: './attribute-bind.component.html',
  styleUrls: ['./attribute-bind.component.css']
})
export class AttributeBindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputEvent(event: any) {
    // 输出DOM属性
    console.log('输出DOM属性：' + event.target.value);
    // 输出HTML属性
    console.log('输出HTML属性：' + event.target.getAttribute('value'));
  }
}

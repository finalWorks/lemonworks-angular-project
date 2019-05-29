import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-attribute-bind',
  templateUrl: './html-attribute-bind.component.html',
  styleUrls: ['./html-attribute-bind.component.css']
})
export class HtmlAttributeBindComponent implements OnInit {

  private greeting: String = 'A value';
  private cssKey: String = '';
  private isB: Boolean = false;
  private isC: Boolean = false;
  private isD: Boolean = false;
  private isE: Boolean = false;

  constructor() { }

  ngOnInit() {
    this.cssKey = 'styleA';
  }

  clickEvent1(event: any) {
    this.greeting = 'B value';
  }

  clickEvent2(event: any) {
    this.isB = !this.isB;
  }

  clickEvent3(event: any) {
    this.isE = !this.isE;
  }

  inputEvent(event: any) {
    const cssKey: String = event.target.value;
    if (cssKey === 'C' || cssKey === 'c') {
      this.isC = true;
    } else if (cssKey === 'D' || cssKey === 'd') {
      this.isD = true;
    } else {
      this.isC = false;
      this.isD = false;
    }
  }
}

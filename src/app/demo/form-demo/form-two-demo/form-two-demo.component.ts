import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-two-demo',
  templateUrl: './form-two-demo.component.html',
  styleUrls: ['./form-two-demo.component.css']
})
export class FormTwoDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
  }
}

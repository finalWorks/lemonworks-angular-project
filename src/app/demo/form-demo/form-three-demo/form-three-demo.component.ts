import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-three-demo',
  templateUrl: './form-three-demo.component.html',
  styleUrls: ['./form-three-demo.component.css']
})
export class FormThreeDemoComponent implements OnInit {

  userName: FormControl = new FormControl('Tony');

  formModel: FormGroup = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl('AAA@qq.com'),
      new FormControl('BBB@qq.com')
    ]),
    anthorUserName:  new FormControl('钢铁侠')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  addEmail(){
    let emails= this.formModel.get('emails') as FormArray;
    emails.push(new FormControl('CCC@qq.com'));
  }
}

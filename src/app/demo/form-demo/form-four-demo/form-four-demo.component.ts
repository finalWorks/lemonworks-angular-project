import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-four-demo',
  templateUrl: './form-four-demo.component.html',
  styleUrls: ['./form-four-demo.component.css']
})
export class FormFourDemoComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      userName: [''],
      telphoneNumber: [''],
      passwordGroup: fb.group({
        password: [''],
        confirmPassword: ['']
      })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

}

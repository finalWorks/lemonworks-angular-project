import { Component, OnInit } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-another-form-validation-demo',
  templateUrl: './another-form-validation-demo.component.html',
  styleUrls: ['./another-form-validation-demo.component.css']
})
export class AnotherFormValidationDemoComponent implements OnInit {

  userNameValid: Boolean = true;
  userNameUntouched: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any, valid: boolean) {
    console.log(valid);
    console.log(value);
  }

  onUserNameInput(formModel: NgForm) {
    if (formModel) {
      this.userNameValid = formModel.form.get('userName').valid;
      this.userNameUntouched = formModel.form.get('userName').untouched;
    }
  }
}

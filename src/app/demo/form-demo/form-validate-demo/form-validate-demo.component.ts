import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { mobileValidator, equalValidator } from '../validators/validator';

@Component({
  selector: 'app-form-validate-demo',
  templateUrl: './form-validate-demo.component.html',
  styleUrls: ['./form-validate-demo.component.css']
})
export class FormValidateDemoComponent implements OnInit {

  /*
    校验器的写法：
    XXXX(control: AbstractControl): {[key: String]: any} {
      return null;
    }
  */

  mobileValidator1(control: FormControl): any {
    const myreq = /^(((13[0-9]{1}) | (15[0-9]{1}) | (18[0-9]{1}))+\d{8})$/;

    const valid = myreq.test(control.value);
    return valid ? null : { mobile: '电话号码格式不正确，请重新输入。' };
  }

  equalValidator1(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const confirmPassword: FormControl = group.get('confirmPassword') as FormControl;

    const valid: boolean = password.value === confirmPassword.value;
    return valid ? null : { equal: '密码和确认密码不一致，请重新输入。' };
  }

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      telphoneNumber: ['', Validators.minLength(6)],
      passwordGroup: fb.group({
        password: ['', Validators.minLength(6)],
        confirmPassword: ['', Validators.minLength(6)]
      }, { validator: equalValidator })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.getLog('userName');
    this.getLog('telphoneNumber');
    this.getLog('passwordGroup');
    this.getLog('password');
    this.getLog('confirmPassword');
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  getLog(item: string) {
    const isValid: boolean = this.formModel.get(item).valid;
    const errors: any = this.formModel.get(item).errors;
    const errMsg: string = isValid ? '' : '; 错误信息是：' + JSON.stringify(errors);
    console.log('用户名的校验结果：' + isValid + errMsg);
  }

}

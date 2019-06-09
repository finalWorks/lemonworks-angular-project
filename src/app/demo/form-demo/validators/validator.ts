import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

export function mobileValidator(control: FormControl): any {
    const myreq = /^(((13[0-9]{1}) | (15[0-9]{1}) | (18[0-9]{1}))+\d{8})$/;
    const valid = myreq.test(control.value);
    return valid ? null : { mobile: '电话号码格式不正确，请重新输入。' };
}

export function equalValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const confirmPassword: FormControl = group.get('confirmPassword') as FormControl;
    let valid: Boolean = false;
    if (password !== null && confirmPassword !== null) {
        valid = password.value === confirmPassword.value;
    }
    return valid ? null : { equal: { descA: '密码和确认密码不一致，请重新输入。' } };
}

// 异步校验器(如下所示作为第三个参数)
// telphoneNumber: ['', Validators.minLength(6), mobileAsyncValidator],
export function mobileAsyncValidator(control: FormControl): any {
    const myreq = /^(((13[0-9]{1}) | (15[0-9]{1}) | (18[0-9]{1}))+\d{8})$/;
    const valid = myreq.test(control.value);
    return Observable.of(valid ? null : { mobile: '电话号码格式不正确，请重新输入。' });
}

export function equalAsyncValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const confirmPassword: FormControl = group.get('confirmPassword') as FormControl;
    let valid: Boolean = false;
    if (password !== null && confirmPassword !== null) {
        valid = password.value === confirmPassword.value;
    }
    return Observable.of(valid ? null : { equal: { descA: '密码和确认密码不一致，请重新输入。' } });
}

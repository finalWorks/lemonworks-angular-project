import { NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';
import { equalValidator } from '../validators/validator';

@Directive({
  selector: '[appEqual]',
  providers: [{provide: NG_VALIDATORS, useValue: equalValidator, multi: true}]
})
export class EqualValidatorDirective {

  constructor() { }

}

import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noSpace } from '../Validators/nospace.validators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  nameRegex = /^[a-zA-Z\-]+$/;
  emailRegex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
  form: any;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
          noSpace,
          Validators.pattern(this.nameRegex),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
          noSpace,
          Validators.pattern(this.emailRegex),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
    });
  }
  Submit() {
    console.log(this.form.value);
  }
  get fc() {
    return this.form.controls;
  }
}

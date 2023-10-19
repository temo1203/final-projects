import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  popBool: boolean = false;
  id: any = '';
  img: string = '';
  name: string = '';
  price: any = '';
  form: any;
  emailRegex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.queryParams.subscribe((params) => {
      this.id = params['productId'];
      this.img = params['productImage'];
      this.name = params['productName'];
      this.price = params['productPrice'];
      // console.log(this.id, this.name, this.price, this.img);
    });
    this.form = fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern(this.emailRegex),
        ],
      ],
      textarea: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
  }
  stars: string[] = ['star', 'star', 'star', 'star', 'star'];
  selectedRating: number = 0;

  setRating(rating: any) {
    this.selectedRating = rating;
  }
  SubmitForm() {
    console.log(this.form.value);
    this.popBool = false;
  }
  openPop() {
    this.popBool = true;
  }
  closePop() {
    this.popBool = false;
  }
  get fc() {
    return this.form.controls;
  }
}

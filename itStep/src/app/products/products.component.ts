import { Component, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  id: any = '';
  img: string = '';
  name: string = '';
  price: any = '';
  constructor(private route: ActivatedRoute, private el: ElementRef) {
    this.route.queryParams.subscribe((params) => {
      this.id = params['productId'];
      this.img = params['productImage'];
      this.name = params['productName'];
      this.price = params['productPrice'];
      // console.log(this.id, this.name, this.price, this.img);
    });
  }
  stars: string[] = ['star', 'star', 'star', 'star', 'star'];
  selectedRating: number = 0;

  setRating(rating: any) {
    this.selectedRating = rating;
  }
}

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private service: NewsService) {}
  productData: any;
  ngOnInit(): void {
    this.service.getProduct().subscribe({
      next: (data) => {
        this.productData = Object.values(data);
        console.log(this.productData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

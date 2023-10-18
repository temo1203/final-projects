import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { query } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: ApiServiceService, private router: Router) {}
  searchBar = [
    'Instruments',
    'auto products',
    'office and network',
    'Appliances',
    'Smartphones',
    'TV and Entertainment',
    'Computer',
  ];
  asideSearchBar = [
    'Power tools and equipment for the garden',
    'Construction, measurement and cleaning',
    'Hand tools and equipment',
    'Auto electronics and antitheft systems',
    'car audio',
    'Outdoor and interior',
  ];
  variable: number = 3;
  productData: any;
  ngOnInit(): void {
    this.service.GetProductApi().subscribe({
      next: (data) => {
        this.productData = Object.values(data).slice(0, 6);
        console.log(this.productData);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  productClick(id: any, image: string, name: string, price: number) {
    this.router.navigate(['/products'], {
      queryParams: {
        productId: id,
        productImage: image,
        productName: name,
        productPrice: price,
      },
    });
  }
}

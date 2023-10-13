import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css'],
})
export class ItComponent implements OnInit {
  productApi: string =
    'https://test-f458d-default-rtdb.firebaseio.com/product.json';
  itData: any;
  constructor(private service: NewsService, private http: HttpClient) {}
  ngOnInit(): void {}
  PostProducts(data: object) {
    this.http.post(this.productApi, data).subscribe((res) => {
      console.log(res);
    });
  }
}

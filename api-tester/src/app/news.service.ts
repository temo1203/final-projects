import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}
  productApi: string = 'https://fakestoreapi.com/products';
  itApi: string = 'https://eshop.webwide.ge/rest/product';
  Api: string =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=acd4c48de722464dac82f5686eb483d6';
  getProduct(): Observable<any> {
    return this.http.get(this.productApi);
  }
  getApiProduct(): Observable<any> {
    return this.http.get(this.itApi);
  }
  getWeather() {
    return this.http.get(this.Api);
  }
}

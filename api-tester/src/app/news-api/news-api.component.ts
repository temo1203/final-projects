import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.css'],
})
export class NewsApiComponent implements OnInit {
  NewsData: any;
  NewsArray: any;
  constructor(private service: NewsService) {}
  ngOnInit(): void {
    // this.service.getweather ამაში რა api იც გვაქვს მაქედან data ვიღებთ
    this.service.getWeather().subscribe({
      next: (data) => {
        this.NewsArray = Object.values(data);
        console.log(this.NewsArray[2]);
      },
      error: (err) => {
        // console.log(err);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { WeatherServiceService } from 'src/weather-service.service';
@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css'],
})
export class WeatherApiComponent implements OnInit {
  ngOnInit(): void {
    this.LoadWeather(this.city);
  }
  Err: boolean = false;
  WeatherData: any;
  WeatherTemp: number = 0;
  WeatherFeel: number = 0;
  WeatherHum: number = 0;
  WeatherPressure: number = 0;
  sum: string = '';
  iconUrl: string = '';
  city: string = 'Georgia';
  unit: string = 'metric';
  constructor(private weather: WeatherServiceService) {}
  LoadWeather(value: string) {
    this.weather.getWeather(value, this.unit).subscribe({
      next: (data) => {
        console.log(data);
        this.WeatherData = data;
        this.WeatherTemp = this.WeatherData.main.temp;
        this.WeatherFeel = this.WeatherData.main.feels_like;
        this.WeatherHum = this.WeatherData.main.humidity;
        this.WeatherPressure = this.WeatherData.main.pressure;
        this.sum = this.WeatherData.weather[0].main;
        this.iconUrl =
          'https://openweathermap.org/img/wn/' +
          this.WeatherData.weather[0].icon +
          '@2x.png';
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  Bool() {
    this.Err = false;
  }
  Receiver(value: string) {
    console.log(value);

    this.weather.getWeather(value, this.unit).subscribe({
      next: (data) => {
        if (value == '') {
          alert('enter something');
        } else {
          this.Err = false;
          this.city = value;
          console.log(data);
          this.WeatherData = data;
          this.WeatherTemp = this.WeatherData.main.temp;
          this.WeatherFeel = this.WeatherData.main.feels_like;
          this.WeatherHum = this.WeatherData.main.humidity;
          this.WeatherPressure = this.WeatherData.main.pressure;
          this.sum = this.WeatherData.weather[0].main;
          this.iconUrl =
            'https://openweathermap.org/img/wn/' +
            this.WeatherData.weather[0].icon +
            '@2x.png';
        }
      },
      error: (error) => {
        this.Err = true;
        console.log(error);
      },
    });
  }
}

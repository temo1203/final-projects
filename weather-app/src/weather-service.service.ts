import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {}
  getWeather(city: string, unit: string) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=fb24281bf70b64e9c3ee96f9862210c3&units=' +
        unit
    );
  }
  // getCity(city:string){
  //   return this.http.get('')
  // }
}

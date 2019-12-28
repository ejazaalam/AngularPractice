import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  errorData: {};

  constructor(private http: HttpClient) {}

  getWeather(city) {
    return this.http
      .get<any>(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=b89cb7922607189de06b409abde50291"
      );
  }
}

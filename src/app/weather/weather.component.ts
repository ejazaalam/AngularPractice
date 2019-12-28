import { WeatherService } from "./weather.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  cityName: String;
  cityDesc: String;
  cityTemp: String;
  weatherForm = new FormGroup({
    city: new FormControl("")
  });
  constructor(private WeatherService: WeatherService) {}

  ngOnInit() {}

  mapData(data){
    this.cityName = data.name;
    this.cityDesc = data.weather[0].description;
    this.cityTemp = (((data.main.temp - 32)* 5/9).toString());
  }

  getWeather() {
    this.WeatherService.getWeather(this.weatherForm.value.city).subscribe(
      res => {
        this.mapData(res);
      },
      err => {
        console.error("getWeather API error: ", err);
      }
    )
  }
}

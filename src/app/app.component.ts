import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }
  value = 'World';

  doRequest() {
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe(x=>{
      console.log(x);
    });

    this.http.get("https://green-plant-0ed045a03.5.azurestaticapps.net/api/WeatherForecast").subscribe(x=>{
      console.log(x);
    })
  }
}
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
  }
}
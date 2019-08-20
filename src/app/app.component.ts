import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsgator';

  constructor(private _http : HttpService) {}

  ngOnInit() {
    let observable = this._http.getBBC();
    observable.subscribe(data => {
      console.log(data);
    });
  }

}

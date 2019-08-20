import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ars',
  templateUrl: './ars.component.html',
  styleUrls: ['./ars.component.css']
})
export class ArsComponent implements OnInit {

  constructor(private _httpService : HttpService, private _router: Router) { }

  articles : any = [];

  ngOnInit() {
    let observable = this._httpService.getArs();
    observable.subscribe(data => {
      console.log(data);
      this.articles = data['articles'];
    });
  }

  goToHome() {
    this._router.navigate(['/reddit']);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const bbc = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=1d7cea5143fc43838ed03210bc5ee950';

const ars = 'https://newsapi.org/v2/top-headlines?' +
'sources=ars-technica&' +
'apiKey=1d7cea5143fc43838ed03210bc5ee950';

const reddit = 'https://newsapi.org/v2/top-headlines?' +
          'sources=reddit-r-all&' +
          'apiKey=1d7cea5143fc43838ed03210bc5ee950';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient :  HttpClient) { }

  getBBC() {
    return this._httpClient.get(bbc);
  }

  getArs() {
    return this._httpClient.get(ars);
  }

  getReddit() {
    return this._httpClient.get(reddit);
  }

}

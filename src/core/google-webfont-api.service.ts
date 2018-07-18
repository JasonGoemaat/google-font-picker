import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { GoogleWebfontList } from '../models/google-web-font-list';

@Injectable({
  providedIn: 'root'
})
export class GoogleWebfontApiService {
  fontList: Observable<GoogleWebfontList> = null;

  constructor(
    public httpClient: HttpClient,
  ) {
  }

  /**
   * Return the list of fonts retrieved from the google font api.
   */
  getFonts(): Observable<GoogleWebfontList> {
    if (this.fontList == null) {
      this.fontList = this.httpClient.get<GoogleWebfontList>('/assets/webfonts.json');
    }

    return this.fontList;
  }
}

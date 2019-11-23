import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Util } from '../util'
import { Orderitems } from './orderitems'


@Injectable({
  providedIn: 'root'
})
export class OrderitemsService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Array<Orderitems>>(`${Util.API_URL}orderitems/`)
  }

  /*
  addHero (hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
}
*/
}

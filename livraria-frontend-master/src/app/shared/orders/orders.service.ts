import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Util } from '../util'
import { Orders } from './orders'
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { throwError, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<Array<Orders>>(`${Util.API_URL}orders/`)
  }

  insertOrder(order: string){
    return this.http.post(`${Util.API_URL}orders/`, order, httpOptions);
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

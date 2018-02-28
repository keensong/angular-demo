import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Point } from './lin-pen/entities';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BasicService {
  private api_url = 'http://localhost:3000/points';
  private headers = new HttpHeaders({ 'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  // POST请求
  addTodo(posX: number, posY: number): Promise<Point> {
    const point = {
      x: posX,
      y: posY
    };

    return this.http
               .post(this.api_url, JSON.stringify(point), { headers: this.headers })
               .toPromise()
               .then(res => res as Point)
               .catch(this.handleError);
  }

  // GET Points
  getPonits(): Observable<any> {
    return this.http
               .get(this.api_url);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {News} from '../entities/News';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn:'root'
})

export class DataService {

  constructor(private http: HttpClient) {
    console.log('Data service in use');
  }

  getNews (): Observable<News[]>  {
    return this.http.get<News[]>('/assets/data.json').pipe();
  }
}

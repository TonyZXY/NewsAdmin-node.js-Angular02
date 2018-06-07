import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn:'root'
})

export class DataService {

  private urlHead = '10.10.6.111:3000/api'

  constructor(public http: HttpClient) {
    console.log('Data service in use');
  }

}

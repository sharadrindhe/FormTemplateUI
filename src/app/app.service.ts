import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(){
    return this.httpClient.get('http://localhost:8091/api/formtemplate/all');
  }
}

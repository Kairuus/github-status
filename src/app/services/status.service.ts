import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    private http: HttpClient
  ) { }

  private url = 'https://www.githubstatus.com/api/v2/summary.json';

  getComponentStatus(){
    return this.http.get(this.url);
  }

}

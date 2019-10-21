import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsdataService {
  public apiurl = "https://aptagrim-nodejs.herokuapp.com/";
  constructor(private http:HttpClient) { }

  public getjobs():Observable<jobsdata[]>{
    return this.http.get<jobsdata[]>(this.apiurl);
  }
}

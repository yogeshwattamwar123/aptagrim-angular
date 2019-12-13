import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsdataService {
  public apiurl = "https://aptagrim-server.herokuapp.com/api/getjobsdatas";
  constructor(private http:HttpClient) { }

  public getjobs():Observable<jobsdata[]>{
    return this.http.get<jobsdata[]>(this.apiurl);
  }
}

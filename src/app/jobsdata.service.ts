import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsdataService {
  public apiurl = "mongodb+srv://yogeshwattamwar123:wattamwar_123@cluster0-6xvdz.mongodb.net/test?retryWrites=true&w=majority";
  constructor(private http:HttpClient) { }

  public getjobs():Observable<jobsdata[]>{
    return this.http.get<jobsdata[]>(this.apiurl);
  }
}

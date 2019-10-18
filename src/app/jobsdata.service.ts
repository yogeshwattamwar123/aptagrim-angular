import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsdataService {
  public apiurl = "http://mongodb+srv://yogeshwattamwar 1234:wattamwar 123@aptagrimdb-1 nuqk.mongodb.net/test?retryWrites=true&w=majority";
  constructor(private http:HttpClient) { }

  public getjobs():Observable<jobsdata[]>{
    return this.http.get<jobsdata[]>(this.apiurl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsdataService {
  public apiurl = "mongodb+srv://yogeshwattamwar1234:wattamwar_123@aptagrimdb-1nuqk.mongodb.net/test?retryWrites=true&w=majority/api/getjobsdatas";
  constructor(private http:HttpClient) { }

  public getjobs():Observable<jobsdata[]>{
    return this.http.get<jobsdata[]>(this.apiurl);
  }
}

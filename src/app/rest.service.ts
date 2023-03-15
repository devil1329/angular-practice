import { Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http' 
import { Observable } from 'rxjs';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }
  strUrl : string = "http://localhost:3001/students";

  //get
  getData() : Observable<any>{
    return this.http.get(this.strUrl);
  }

  //post
  insertData(studentObj : Students) : Observable<any>{
    const headers = {'content-type' : 'application/json'};
    const body = JSON.stringify(studentObj);
    console.log(body);
    return this.http.post(this.strUrl, body,{'headers':headers});
  }

  //put for editing records
  editRecord(studentObj : Students) : Observable<any> {
    let editUrl = this.strUrl+"/"+studentObj.id;
    return this.http.put(editUrl, studentObj);
  }
  
  //delete
  deleteData(id : number) : Observable<any> {
    let deleteUrl = this.strUrl+"/"+id;
    console.log("Url for delete : "+deleteUrl);
    return this.http.delete(deleteUrl);
  }
}

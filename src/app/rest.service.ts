import { Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  strUrl: string = "http://localhost:9001/api/students";


  //get
  getData(): Observable<any> {
    return this.http.get(this.strUrl + '/get-all-student-details');
  }

  //get one student data
  getStudent(id: number): Observable<any> {
    return this.http.get(this.strUrl + `/get-student/` + id);
  }

  //post
  insertData(studentObj: Students): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(studentObj);
    console.log(body);
    return this.http.post(this.strUrl + '/add-student-record', body, { 'headers': headers });
  }

  //put for editing records
  editRecord(studentObj: Students): Observable<any> {
    let editUrl = this.strUrl + "/update-student-record";
    return this.http.put(editUrl, studentObj);
  }

  //delete
  deleteData(id: number): Observable<any> {
    let deleteUrl = this.strUrl + '/delete-student-record/' + id;
    return this.http.delete(deleteUrl);
  }

  //login
  login(loginObj: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };

    const body = JSON.stringify(loginObj)
    return this.http.post(this.strUrl + '/login', body, { 'headers': headers, 'responseType': 'text' })
  }
}

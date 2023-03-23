import { Injectable } from '@angular/core';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentsArr: Students[] = []

  constructor() { }

  getAllStudents() {
    return this.studentsArr;
  }
  getStudentById(id : number){
    return this.studentsArr.filter( Students => Students.id==id);
  }
  getStudentByName(strName : string){
    return this.studentsArr.filter( Students => Students.name==strName);
  }
}

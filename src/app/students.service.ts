import { Injectable } from '@angular/core';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentsArr: Students[] = [
    { studentID: 101, name: "Raju", stream: "Arts", marks : 470 },
    { studentID: 102, name: "Raj", stream: "Science", marks : 465 },
    { studentID: 103, name: "Raka", stream: "Commerce", marks : 460 },
    { studentID: 104, name: "Raghav", stream: "Science", marks : 455 },
    { studentID: 105, name: "Rocket", stream: "Arts", marks : 450 }
  ]

  constructor() { }

  getAllStudents() {
    return this.studentsArr;
  }
  getStudentById(id : number){
    return this.studentsArr.filter( Students => Students.studentID==id);
  }
  getStudentByName(strName : string){
    return this.studentsArr.filter( Students => Students.name==strName);
  }
}

import { Injectable } from '@angular/core';
import { StudentModel } from './StudentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentFormService {
  Student : StudentModel;
  StudentList:StudentModel[]=[];
  
  constructor() { 

  }
  getStudents():StudentModel[]
  {
    //http
    this.StudentList.push(this.Student);
    return this.StudentList;
  }
}

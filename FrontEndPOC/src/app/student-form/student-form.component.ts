import { Component, OnInit } from '@angular/core';
import {StudentFormService} from '../student-form.service';
import { StudentModel } from '../StudentModel';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student:StudentModel;
  studentList:StudentModel[];
 
  constructor(private studentFormService:StudentFormService) {  
   }

  ngOnInit() {
 
  }
  onSubmit()
  {
    this.studentList = this.studentFormService.getStudents();
  }

}

import { Component, OnInit } from '@angular/core';
import {StudentFormService} from '../student-form.service';
import { StudentModel } from '../StudentModel';
import { Observable,of } from 'rxjs';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student:StudentModel;
  studentList:StudentModel[]=[];

  constructor(private studentFormService:StudentFormService) {  
  
    this.studentFormService.getStudents()
      .subscribe(stu => {
        this.studentList = stu;
        this.displayList();    
      });    
  }

  ngOnInit() {
    this.student = new StudentModel();
    
    }
  onSubmitStudent(student:StudentModel)
  {
    
    //console.log((this.studentList));

    //this.studentFormService.Student = student;
    //this.studentList = this.studentFormService.getStudents();
    //console.log(this.studentList);
    //this.student = new StudentModel();
    //this.displayList();  
    
    this.studentFormService.deleteUsingId(1).subscribe();
    
  }

  getById()
  {
    this.studentFormService.getStudentById(2)
    .subscribe(stu =>{
       this.student =stu;
       console.log(this.student);
    });

  }
  displayList()
  {
    console.log(this.studentList);
  }

}

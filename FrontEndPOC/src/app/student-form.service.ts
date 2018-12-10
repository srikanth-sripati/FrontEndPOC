import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentModel } from './StudentModel';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentFormService {
  Student : StudentModel;
  StudentList:StudentModel[]=[];
  private handleError;
  private studentUrl ='http://localhost:9090/students';
  private studentById ='http://localhost:9090/students/';
  private deleteById ='http://localhost:9090/delete/';
  constructor(private http: HttpClient) { 

  }
  getStudents(): Observable<StudentModel[]>
  {
    //http
    //this.StudentList.push(this.Student);
    return this.http.get<StudentModel[]>(this.studentUrl);
    // .pipe(
    //   catchError(this.handleError('getStudents', []))
    //);
  }
  getStudentById(id: Number): Observable<StudentModel>
  {
    this.studentById = this.studentById + id; 
    return this.http.get<StudentModel>(this.studentById);
  }

  deleteUsingId(id: Number): Observable<{}> 
  {
    this.deleteById = this.deleteById +id;
    return this.http.delete(this.deleteById);    
  }

}

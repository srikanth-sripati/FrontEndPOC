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
  
  constructor(private http: HttpClient) { 

  }
  getStudents(): Observable<StudentModel[]>
  {
    //http
    //this.StudentList.push(this.Student);
    return this.http.get<StudentModel[]>(this.studentUrl)
    .pipe(
      catchError(this.handleError('getStudents', []))
    );
  }
}

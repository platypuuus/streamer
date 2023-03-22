import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { IStudent } from "../interfaces/i-student";
import { StudentModel } from "../models/student-model";
import { SimpleStudent } from "../types/simple-student-type";

import { environment } from "./../../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class StudentService {
  private readonly endpoint: string = `${environment.apiRootUri}students`;

  constructor(
    private _httpClient: HttpClient // DI Angular
  ) {}

  /**
   * Send a GET request to http://127.0.0.1:5000/api/v1/students
   * @returns Observable<IStudent>
   */
  public findAll(): Observable<IStudent[]> {
    return this._httpClient.get<IStudent[]>(this.endpoint);
  }

  public findSimpleStudents(): Observable<SimpleStudent[]> {
    return this._httpClient.get<SimpleStudent[]>(this.endpoint + "/simple");
  }

  public findOne(id: string): Observable<IStudent> {
    return this._httpClient.get<IStudent>(this.endpoint + "/" + id);
  }

  public findByEmail(email: string): void {}

  public findByLoginOrEmail(email: string, login: string): void {}

  public add(student: IStudent): Observable<IStudent> {
    console.log("Controller send " + JSON.stringify(student));

    return this._httpClient.post<IStudent>(this.endpoint, student);
    /**.pipe(take(1))
      .subscribe({
        next: (response: IStudent) => {
          console.log(JSON.stringify(response));
          return true;
        },
        error: (error: any) => {
          console.log(`Something went wrong : ${JSON.stringify(error)}`);
          return false;
        },
      }); */
  }

  public update(student: StudentModel): Observable<IStudent>  {
    console.log("Controller send " + JSON.stringify(student));

    return this._httpClient.post<IStudent>(this.endpoint+"/update", student);
  }

  public remove(student: StudentModel): void {}
}

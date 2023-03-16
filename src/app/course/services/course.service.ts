import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseType } from '../types/course-type';
import { SelectCourseType } from '../types/select-course-type';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly endpoint: string = `${environment.apiRootUri}courses`

  constructor(private _httpClient: HttpClient) { }

  public findAll(): Observable<SelectCourseType[]> {
    return this._httpClient.get<SelectCourseType[]>(
      this.endpoint
    )
  }

  public findOne(id: number): void {}

  public add(course: CourseType): void {}

  public update(course: CourseType): void {}

  public remove(course: CourseType): void {}
}

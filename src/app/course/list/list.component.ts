import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CourseService } from '../services/course.service';
import { CourseType } from '../types/course-type';
import { SelectCourseType } from '../types/select-course-type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public courses : SelectCourseType[]=[];  

  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {    
    this._courseService.findAll()
      .pipe(
        take(1)
      ).subscribe((courses: SelectCourseType[]) => {
        this.courses = courses
      })
      
  }
  

}

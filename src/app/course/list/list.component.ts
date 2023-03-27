import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _courseService: CourseService,private _router: Router) { }

  ngOnInit(): void {    
    this._courseService.findAll()
      .pipe(
        take(1)
      ).subscribe((courses: SelectCourseType[]) => {
        this.courses = courses
      })
      
  }
  
  public onClick(object: any): void {
    this._router.navigate(object.action);
  }
}

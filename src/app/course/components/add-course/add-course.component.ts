import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseType } from '../../types/course-type';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  
  public form: FormGroup = new FormGroup({});
   private _course :any;

  constructor(
    private _formBuilder: FormBuilder) {
      this._buildForm()
     }

  ngOnInit(): void {
  }
  public get c(): {[key: string]: AbstractControl} {
    return this.form.controls
  }
  private _buildForm(): void {
    this.form = this._formBuilder.group({
      title: [
        "",
        [
          Validators.required
        ]
      ],
      objective: [
        ""
      ]
    })
  }
}

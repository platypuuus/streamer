import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { take } from "rxjs";
import { CourseService } from "../../services/course.service";
import { CourseType } from "../../types/course-type";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.scss"],
})
export class AddCourseComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  private _course: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _courseService: CourseService,
    private _router: Router
  ) {
    this._buildForm();
  }

  ngOnInit(): void {}
  public get c(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onSubmit(): void {
    this._courseService
      .add(this.form.value)
      .pipe(take(1))
      .subscribe({
        next: (response: any) => {
          console.log(JSON.stringify(response));
          this._router.navigate(['/', 'course']);
        },
        error: (error: any) => {
          console.log(`Something went wrong : ${JSON.stringify(error)}`);
        },
      });
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      title: ["", [Validators.required]],
      objective: [""],
    });
  }
}

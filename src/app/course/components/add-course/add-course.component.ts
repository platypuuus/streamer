import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { take } from "rxjs";
import { CourseService } from "../../services/course.service";
import { CourseType } from "../../types/course-type";
import { ModuleType } from "../../types/module-type";
import { AddModuleComponent } from "../add-module/add-module.component";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.scss"],
})
export class AddCourseComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public newModules: ModuleType[] = [];
  private _course: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _courseService: CourseService,
    private _router: Router,
    private _matDialog: MatDialog
  ) {
    this._buildForm();
  }

  ngOnInit(): void {}
  public get c(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onSubmit(): void {
    console.log(this.form.value);
    let newCourse: CourseType = {
      title: this.form.value.title,
      objective: this.form.value.objective,
      modules : this.newModules
    };
    this._courseService
      .add(newCourse)
      .pipe(take(1))
      .subscribe({
        next: (response: any) => {
          console.log(JSON.stringify(response));
          this._router.navigate(["/", "course"]);
        },
        error: (error: any) => {
          console.log(`Something went wrong : ${JSON.stringify(error)}`);
        },
      });
  }
  public deleteNewModule(module: ModuleType): void {
    for (let i = 0; i < this.newModules.length; i++) {
      if (this.newModules[i] == module) {
        this.newModules.splice(i, 1);
        break;
      }
    }
  }
  public addModule(): void {
    this._openDialog();
  }

  private _openDialog(): void {
    const dialogRef = this._matDialog.open(AddModuleComponent, {
      width: "500px",
      height: "500px",
      hasBackdrop: true,
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: ModuleType) => {
      // student was received from dialog

      console.log(result);
      if (result) {
        this.newModules.push(result);
        console.log(`Got a result, do a job`);
      } else {
        console.log(`No result, lunch time`);
      }
    });
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      title: ["", [Validators.required]],
      objective: [""],
    });
  }
}

import { HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";
import { IStudent } from "../interfaces/i-student";
import { ListComponent } from "../list/list.component";
import { StudentModel } from "../models/student-model";
import { StudentFormService } from "../services/student-form.service";
import { StudentService } from "../services/student.service";
import { SimpleStudent } from "../types/simple-student-type";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"],
})
export class UpdateComponent implements OnInit {
  public form: FormGroup = new FormGroup({})
  public student: StudentModel | null = null

  constructor(
    private _route: ActivatedRoute,
    private _service: StudentService,
    private _studentFormService: StudentFormService
  ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.paramMap.get('id'))
    const id: number = +this._route.snapshot.paramMap.get('id')!
    this._service.findOne(id)
      .subscribe({
        next: (student: StudentModel) => {
          this.student = student
          this._studentFormService.buildForm(this.student)
          this.form = this._studentFormService.form
        },
        error: (error: any) => {
          console.log('Something went wrong')
        }
      })
  }

  get c(): {[key: string]: AbstractControl} {
    return this._studentFormService.c
  }

  onSubmit(): void {
   /* this.student!.lastName = this.c['lastName'].value
    this.student!.firstName = this.c['firstName'].value
    this.student!.email = this.c['email'].value
    this.student!.phoneNumber = this.c['phoneNumber'].value
    this.student!.login = this.c['login'].value
    this.student!.password = this.c['password'].value*/

    this._service.update(this.student!)
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(`Student was updated ${response.status}`)
        },
        error: (error: any) => {
          console.log(JSON.stringify(error))
        }
      })
  }
}

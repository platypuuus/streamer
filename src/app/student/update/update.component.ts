import { Component, Inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
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
  public form: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IStudent,
    private _service: StudentService,
    private _studentFormService: StudentFormService,
    
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.c["email"]);

    this.form = this._studentFormService.form;

    this.form.setValue({
      lastName: this.data.lastName,
      firstName: this.data.firstName,
      email: this.data.email,
      login: this.data.login,
      password: "",
      phoneNumber: this.data.phoneNumber,
    });
  }

  public get c(): { [key: string]: AbstractControl } {
    return this._studentFormService.c;
  }

  public onSubmit(): void {
    let stu: StudentModel = this.form.value;
    const theID: number = this.data.id ?? 0;
    stu.id = theID;

    this._service
      .update(this.form.value)
      .pipe(take(1))
      .subscribe({
        next: (response: IStudent) => {
          console.log(JSON.stringify(response));
          //this.openSnackBar("Etudiant créer !", true);
          //this._router.navigate(['/', 'student', 'list']);

          this.dialogRef.close();
        },
        error: (error: any) => {
          console.log(`Something went wrong : ${JSON.stringify(error)}`);
          //this.openSnackBar("Echec lors de la creation de l'étudiant", false);
        },
      });
  }
}

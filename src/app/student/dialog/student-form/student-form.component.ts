import { Component, Inject, OnInit } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { StudentModel } from "../../models/student-model";
import { StudentFormService } from "../../services/student-form.service";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.scss"],
})
export class StudentFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public textButton: String = "Add";

  private _student: StudentModel;

  constructor(
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _studentFormService: StudentFormService
  ) {
    this._student = this.data.student;
  }

  ngOnInit(): void {
    this.textButton = this._student.id ? "Update" : "Add";
    this._studentFormService.buildForm(this._student);
    this.form = this._studentFormService.form;
  }

  public get c(): { [key: string]: AbstractControl } {
    return this._studentFormService.c;
  }

  /**
   * Event triggered if user click on the No button
   */
  public onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Event triggered if user click on Yes button
   */
  public onSubmit(): void {
    this._studentFormService.onSubmit().subscribe((student: StudentModel) => {
      this.dialogRef.close(student);
    });
  }

  
}

import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { take } from "rxjs";
import { IStudent } from "../interfaces/i-student";
import { StudentFormService } from "../services/student-form.service";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})

export class AddComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  constructor(
    private _studentFormService: StudentFormService,
    private _service: StudentService,
    private _snackBar: MatSnackBar
  ) {}



  ngOnInit(): void {
    this.form = this._studentFormService.form;
  }
  public get c(): { [key: string]: AbstractControl } {
    return this._studentFormService.c;
  }
  public onSubmit(): void {
    this._service
      .add(this.form.value)
      .pipe(take(1))
      .subscribe({
        next: (response: IStudent) => {
          console.log(JSON.stringify(response));
          this.openSnackBar("Etudiant créer !", true);
        },
        error: (error: any) => {
          console.log(`Something went wrong : ${JSON.stringify(error)}`);
          this.openSnackBar("Echec lors de la creation de l'étudiant", false);
        },
      });
  }

  openSnackBar(message: string, succes: boolean) {
    this._snackBar.open(message, "", {
      duration: 2000,
      panelClass: [succes ? "green-snackbar" : "red-snackbar"],
    });
  }


}

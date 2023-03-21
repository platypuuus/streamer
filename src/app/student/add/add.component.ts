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
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  constructor(
    private _formBuilder: FormBuilder,
    private _service: StudentService,
    private _snackBar: MatSnackBar
  ) {}

  randomGenerate : any = {
    lastName : "",
    email : "",
    phone : ""
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      lastName: [
        "", //valeur par defaut
        [Validators.required], //Function de validation
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      phoneNumber: [
        "",
        [
          Validators.pattern(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
          ),
        ],
      ],
      login: [
        "", //valeur par defaut
        [Validators.required], //Function de validation
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/),
        ], //minuscule majuscule et chiffres
      ],
    });
  }
  public get c(): { [key: string]: AbstractControl } {
    return this.form.controls;
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

  public generateForm(): void {
    let numbers: string = "0123456789";
    let letter: string = "azertyuiopmlkjhgfdsqwxcvbn";
    this.randomGenerate.lastName = this.generateOne(letter,10);
  }
  private generateOne(chain: string, lenght: number) {
    let result: string = "";
    let counter: number = 0;
    while (counter < length) {
      result += chain.charAt(Math.floor(Math.random() * chain.length));
      counter += 1;
    }
    return result;
  }
}

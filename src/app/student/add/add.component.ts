import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      lastName: [
        "", //valeur par defaut
        [Validators.required], //Function de validation
      ],
      email: [
        "",
        [Validators.required, Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)],
      ],
      phoneNumber: [
        "",
        [Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)],
      ],
      login: [
        "", //valeur par defaut
        [Validators.required], //Function de validation
      ],
      password: [
        "",
        [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)],//minuscule majuscule et chiffres
      ],
    });
  }
  public get c(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public onSubmit(): void {
    console.log("form submit");
  }
}

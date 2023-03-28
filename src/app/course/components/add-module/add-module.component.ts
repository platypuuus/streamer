import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ModuleType } from '../../types/module-type';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddModuleComponent>,) {
      this._buildForm(); }

  ngOnInit(): void {
  }
  
  public get c(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      title: ["", [Validators.required]],
      objective: [""],
    });
  }

  public onSubmit():void{
    let module:ModuleType = {name: this.c['title'].value,objective:this.c['objective'].value}
      this.dialogRef.close(module);
  }
  public onQuit():void{
      this.dialogRef.close();
  }
  
}

import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { take } from "rxjs";
import { IStudent } from "../interfaces/i-student";
import { StudentService } from "../services/student.service";
import { SimpleStudent } from "../types/simple-student-type";
import { UpdateComponent } from "../update/update.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public students: SimpleStudent[] = [];
  public byIdSortOrder: number = -1;
  public byLastNameSortOrder: number = 1;
  public sortDefault: string = "id";
  public checkUncheckAll: boolean = false;

  constructor(
    private _studentService: StudentService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._studentService
      .findSimpleStudents()
      .pipe(take(1))
      .subscribe((students: SimpleStudent[]) => {
        this.students = students;
        this.byIdSortOrder = this.byIdSortOrder * -1;
        this.byId();
      });
  }
  
  openDialog(studentID: string): void {
    this._studentService
      .findOne(studentID)
      .pipe(take(1))
      .subscribe((student: IStudent) => {
        const dialogRef = this._dialog.open(UpdateComponent, {
          data: student,
        });
        dialogRef.afterClosed().subscribe((result) => {
          this.ngOnInit();
        });
      });
  }

  public byId(): void {
    this.students.sort(
      (s1: SimpleStudent, s2: SimpleStudent) =>
        (s1.id! - s2.id!) * this.byIdSortOrder
    );
    this.byIdSortOrder = this.byIdSortOrder * -1;
    this.sortDefault = "id";
  }

  public byLastname(): void {
    this.students.sort(
      (s1: SimpleStudent, s2: SimpleStudent) =>
        s1.lastName.localeCompare(s2.lastName) * this.byLastNameSortOrder
    );
    this.byLastNameSortOrder = this.byLastNameSortOrder * -1;
    this.sortDefault = "lastName";
  }

  public onSelectStudent(student: SimpleStudent): void {
    this.checkUncheckAll =
      this.students.filter((s: SimpleStudent) => s.isSelected).length ===
      this.students.length;

    const checkedStudent: SimpleStudent[] = [];
    /**
    for (const s of this.students) {
      if (s.isSelected) {
        checkedStudent.push(s)
      }
    }

   this.students.forEach((s: IStudent) => {
    if (s.isSelected) checkedStudent.push(s)
   })

    this.checkUncheckAll = checkedStudent.length === this.students.length
    */
  }

  public onCheckUncheckAll(): void {
    this.students = this.students.map((s) => {
      return { ...s, isSelected: this.checkUncheckAll };
    });

    //this.students.forEach((s: IStudent) => s.isSelected = this.checkUncheckAll)
  }
}

import { Component, Input, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { take } from "rxjs";
import { DeleteCourseComponent } from "../../dialog/delete-course/delete-course.component";
import { ListComponent } from "../../list/list.component";
import { CourseService } from "../../services/course.service";
import { CourseType } from "../../types/course-type";
import { SelectCourseType } from "../../types/select-course-type";

@Component({
  selector: "app-course-tile",
  templateUrl: "./course-tile.component.html",
  styleUrls: ["./course-tile.component.scss"],
})
export class CourseTileComponent implements OnInit {
  public animationEnable = false;
  public showedModules = false;
  @Input() public tileInfo: any;

  constructor(
    private _listComponent: ListComponent,
    private _courseService: CourseService,
    private _matDialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log(this.tileInfo);
  }
  public onClick(event: any): void {
    this.animationEnable = true;

    this.tileInfo.isSelected = !this.tileInfo.isSelected;
    this._listComponent.courses.forEach((e: SelectCourseType) => {
      if (e.id != this.tileInfo.id) {
        e.isSelected = false;
      }
    });
  }

  public openDialog(course: CourseType): void {
    const dialogRef = this._matDialog.open(DeleteCourseComponent, {
      hasBackdrop: true,
      data: { course },
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log("goooo"+result);
      if (result) {
        this.onDelete(this.tileInfo);

      }
    });
  }

  public onDelete(course: any): void {
    this._courseService
      .remove(course)
      .pipe(take(1))
      .subscribe(() => {
        console.log("course deleted !");
        this._listComponent.ngOnInit();
        this.openSnackBar("Cours suprimé. "+this.tileInfo.modules.length+" ont été supprimé dans l'opération.",true)
      });
  }
  
  openSnackBar(message: string, succes: boolean) {
    this._snackBar.open(message, "", {
      duration: 2000,
      panelClass: [succes ? "green-snackbar" : "red-snackbar"],
    });
  }
}

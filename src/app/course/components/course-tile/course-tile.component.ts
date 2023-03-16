import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ListComponent } from '../../list/list.component';
import { CourseService } from '../../services/course.service';
import { CourseType } from '../../types/course-type';
import { SelectCourseType } from '../../types/select-course-type';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.scss']
})
export class CourseTileComponent implements OnInit {

public animationEnable=false;
  public showedModules = false;
  @Input() public tileInfo: any;

  constructor(private _listComponent: ListComponent) {     }

  ngOnInit(): void {
    console.log(this.tileInfo.title+" // "+this.tileInfo.isSelected)
    
    
  }
  public onClick(event: any): void {
    this.animationEnable = true;

    this.tileInfo.isSelected = !this.tileInfo.isSelected;
    this._listComponent.courses.forEach((e : SelectCourseType)=>{
      if(e.id!=this.tileInfo.id){
        e.isSelected=false;
      }
    })

    
  }
}

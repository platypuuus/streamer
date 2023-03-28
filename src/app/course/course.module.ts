import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { ListComponent } from './list/list.component';
import { CourseTileComponent } from './components/course-tile/course-tile.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { ConvertHourPipe } from './pipe/convert-hour.pipe';

import { SharedModule } from '../shared/shared.module';
import { DeleteCourseComponent } from './dialog/delete-course/delete-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddModuleComponent } from './components/add-module/add-module.component';


@NgModule({
  declarations: [
    ListComponent,
    CourseTileComponent,
    ModuleListComponent,
    ConvertHourPipe,
    DeleteCourseComponent,
    AddCourseComponent,
    AddModuleComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }

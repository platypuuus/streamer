import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { ListComponent } from './list/list.component';
import { CourseTileComponent } from './components/course-tile/course-tile.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { ConvertHourPipe } from './pipe/convert-hour.pipe';


@NgModule({
  declarations: [
    ListComponent,
    CourseTileComponent,
    ModuleListComponent,
    ConvertHourPipe
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }

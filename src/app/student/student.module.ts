import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InitialsPipe } from './pipes/initials.pipe';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    ListComponent,
    InitialsPipe,
    AddComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ]
})
export class StudentModule { }

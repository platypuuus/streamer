import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "../student/add/add.component";
import { AddCourseComponent } from "./components/add-course/add-course.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [RouterModule.forChild(CourseRoutingModule.routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {
  public static routes: Routes = [
    {
      path: "",
      redirectTo: "list",
      pathMatch: "full",
    },
    {
      path: "list",
      component: ListComponent,
      pathMatch: "full",
    },
    {
      path: "add",
      component: AddCourseComponent,
      pathMatch: "full",
    }
  ];
}

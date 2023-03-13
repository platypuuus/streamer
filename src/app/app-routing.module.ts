import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.route)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public static readonly route: Routes = [
    {
      path: "",
      redirectTo: "dashboard",
      pathMatch: "full"
    },
    {
      path:"dashboard",
      component:DashboardComponent
    },
    {
      path :"**",
      redirectTo:"dashboard",
      pathMatch:"full"
    }
  ];
}

import { NgModule } from "@angular/core";
import { CourseType } from "./course-type";
import { ModuleType } from "./module-type";
import { SelectType } from "./select-type";

export type SelectModuleType = ModuleType & SelectType

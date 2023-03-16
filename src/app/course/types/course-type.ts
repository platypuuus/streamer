import { NgModule } from "@angular/core";
import { ModuleType } from "./module-type";

export type CourseType = {
    id?:number;
    title :string;
    summary?:string;
    createdAt: string;
    updatedAt: string;
    objective: string;
    modules: ModuleType[];
}
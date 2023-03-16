import { NgModule } from "@angular/core";

export type CourseType = {
    id?:number;
    title :string;
    summary?:string;
    createdAt: string;
    updatedAt: string;
    objective: string;
    moduleID: number;
}
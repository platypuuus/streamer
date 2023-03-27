import { NgModule } from "@angular/core";
import { ModuleType } from "./module-type";

export type MediaType = {
    id?:number;
    title :string;
    summary?:string;
    duration: number;
    createdAt: string;
    url: string;
    type: string;
    modules: ModuleType;
}
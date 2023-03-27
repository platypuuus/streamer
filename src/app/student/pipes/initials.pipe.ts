import { Pipe, PipeTransform } from "@angular/core";
import { SimpleStudent } from "../types/simple-student-type";

@Pipe({
  name: "initials",
})
export class InitialsPipe implements PipeTransform {
  transform(value: SimpleStudent, ...args: unknown[]): unknown {
    if (value &&value.firstName&&value.lastName) {
      let  str :string =value.firstName?.charAt(0) + value.lastName?.charAt(0);
      return str.toUpperCase();
    }
    return"";
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertHour'
})
export class ConvertHourPipe implements PipeTransform {

  transform(totalMinutes: number, ...args: unknown[]): unknown {
    
    const hours:number = Math.floor(totalMinutes / 60);
    const minutes :number= totalMinutes % 60;
  
    const extend : string = (minutes<9)?"0":"";
    return hours+":"+extend+minutes;
  }

}

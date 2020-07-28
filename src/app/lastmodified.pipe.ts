import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastmodified'
})
export class LastmodifiedPipe implements PipeTransform {

  transform(value: string): string {
      let  result  : string  ;   
    if(value.length > 0 ) 
      {
        let modifiedDate = new Date(value);
        let todayDate = new Date(Date.parse(Date())); 
        result =  Math.round( (todayDate.getTime() - modifiedDate.getTime()) / (1000 * 3600 * 24)) + ' days ago' ; 
      }else 
      {

          result = 'Not  available ';
      }
      return result ; 
  }

}

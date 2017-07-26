import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any, filterField?: string, keyword?: string): any {
    if ( !filterField || !keyword ) {
      return list;
    } else {
      return list.filter( item => {
        const value = item[filterField];
        return value.indexOf(keyword) >= 0;
      } );
    }
  }
}

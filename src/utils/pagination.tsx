import _ from 'lodash';
import { Artist } from './Interfaces'; 
export function paginate(data:Artist[], page:number, pageSize:number) {
  const startIndex = (page - 1) * pageSize;
  return _(data).slice(startIndex).take(pageSize).value();
}
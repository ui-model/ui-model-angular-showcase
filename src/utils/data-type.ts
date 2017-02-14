import {isNumber, isString, isDate} from 'util';
export enum DataType {
  any, boolean, string, int, float, currency, date, time, dateTime, reference,
}

export function dataTypeOf(value: any): DataType {
  if (isNumber(value)) {
    return DataType.float;
  } else if (isString(value)) {
    return DataType.string;
  } else if (isDate(value)) {
    return DataType.date;
  } else {
    return DataType.any;
  }
}

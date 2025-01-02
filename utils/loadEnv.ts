import { resolve } from 'path';
import { homedir } from 'os';

export const getRequiredValue = (key: string) => {
  const rawValue = process.env[key];
  if( !rawValue ) throw Error(`${key} not present in env`);
  return rawValue;
}

export const getCommaDelimitedValue = (key: string) => {
  const rawValue = getRequiredValue(key);
  const value = rawValue.split(',');
  if( value.length < 2 ) throw Error(`${key} must contain at least two comma-delimited values`);
  return value;
}

export const getPathValue = (key: string) => {
  let value = getRequiredValue(key);
  if( !value.startsWith('/') ) {
    value = resolve(__dirname, value);
  }
  else if( value.startsWith('~') ) {
    value = value.replace(/^~/, homedir())
  }
  return value;
}
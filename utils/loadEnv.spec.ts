import { expect, test } from 'bun:test';
import { getPathValue } from "./loadEnv";
import { homedir } from 'os';
import { resolve } from 'path';

test('replace ~', () => {
  process.env['TEST_VALUE'] = '~'
  expect(getPathValue('TEST_VALUE')).toBe(homedir())
})

test('replace ~ and follow with the rest of path', () => {
  process.env['TEST_VALUE'] = '~/test'
  expect(getPathValue('TEST_VALUE')).toBe(homedir() + '/test')
})

test('resolve current dir name to the start if path is not absolute', () => {
  process.env['TEST_VALUE'] = 'test'
  expect(getPathValue('TEST_VALUE')).toBe(resolve(__dirname, 'test'))
})

test('Do nothing to absolute paths', () => {
  process.env['TEST_VALUE'] = '/test'
  expect(getPathValue('TEST_VALUE')).toBe('/test')
})
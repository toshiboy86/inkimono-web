import { expect, test } from 'vitest';
import { getNextLocale } from './utils';

test('getNextLocale should return correct path and value when current language is Japanese', () => {
  const result = getNextLocale('ja', '/about');
  expect(result).toEqual({
    path: '/about',
    value: 'English',
  });
});

test('getNextLocale should return correct path and value when current language is English', () => {
  const result = getNextLocale('en', '/about');
  expect(result).toEqual({
    path: '/ja/about',
    value: '日本語',
  });
});

test('getNextLocale should handle nested paths correctly', () => {
  const result = getNextLocale('en', '/blog/post-1');
  expect(result).toEqual({
    path: '/ja/post-1',
    value: '日本語',
  });
});

test('getNextLocale should handle top level paths correctly', () => {
  const result = getNextLocale('ja', '/ja');
  expect(result).toEqual({
    path: '/',
    value: 'English',
  });
});

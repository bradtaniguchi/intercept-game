import { isBoardHeight } from './board-height';

describe('isBoardHeight', () => {
  test('returns true for ground', () =>
    expect(isBoardHeight('ground')).toBe(true));
  test('returns true in-flight', () =>
    expect(isBoardHeight('in-flight')).toBe(true));
  test('returns false for aa', () => expect(isBoardHeight('aa')).toBe(false));
  test('returns false for random string', () =>
    expect(isBoardHeight('random')).toBe(false));
});

import { getSquareDiagonale } from './getSquareDiagonale';

describe('getSquareDiagonale', () => {
  it('should return the square diagonale', () => {
    // GIVEN
    const a = 3;
    const b = 4;
    // WHEN
    const result = getSquareDiagonale(a, b);
    // THEN
    expect(result).toBe(5);
  });
});

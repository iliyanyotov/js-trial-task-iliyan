import getRandomFloat from './getRandomFloat';

describe('utils: getRandomFloat', () => {
  const min = 5;
  const max = 15;

  const getFractionalPart = (num) => {
    // eslint-disable-next-line no-unused-vars
    const [_, fractionalPart] = num.toString().split('.');
    return fractionalPart.length;
  };

  it('should return a number in the range', () => {
    const num = getRandomFloat(min, max);

    expect(Number(num)).toBeGreaterThanOrEqual(min);
    expect(Number(num)).toBeLessThanOrEqual(max);
    expect(getFractionalPart(num)).toBe(2);
  });

  it('should handle different exp', () => {
    const fp = 6;
    const num = getRandomFloat(min, max, fp);

    expect(getFractionalPart(num)).toBe(fp);
  });
});

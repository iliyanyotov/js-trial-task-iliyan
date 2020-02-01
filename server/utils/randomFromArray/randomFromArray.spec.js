import randomFromArray from './randomFromArray';

describe('utils: randomFromArray', () => {
  const arr = [1, 2, 3, 4];

  it('should return one of the items', () => {
    expect(arr.includes(randomFromArray(arr))).toBe(true);
  });
});

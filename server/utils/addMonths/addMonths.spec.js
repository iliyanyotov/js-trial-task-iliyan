import addMonths from './addMonths';

describe('utils: addMonths', () => {
  it('should return the date with the added months', () => {
    const months = 3;
    const date = new Date(2020, 1, 1);
    const expected = new Date(2020, 3, 1);

    expect(addMonths(date, months)).toEqual(expected);
  });

  it('should return the date with the subtracted months', () => {
    const months = -6;
    const date = new Date(2020, 1, 1);
    const expected = new Date(2019, 6, 1);

    expect(addMonths(date, months)).toEqual(expected);
  });
});

import getRandomDate from './getRandomDate';

describe('utils: getRandomDate', () => {
  const startDate = new Date(2020, 1, 1);
  const endDate = new Date(2020, 1, 15);

  it('should return a date in the range', () => {
    const date = getRandomDate(startDate, endDate);

    expect(date >= startDate).toBe(true);
    expect(date <= endDate).toBe(true);
  });
});

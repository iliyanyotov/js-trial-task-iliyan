import paginate from './paginate';

describe('utils: paginate', () => {
  // Creating array from 1 to 45
  const items = Array.from(Array(45).keys());

  it('should return the first set by default [10 per page]', () => {
    const expected = items.slice(0, 10);

    expect(paginate(items)).toEqual(expected);
  });

  it('should return the second page by default [10 per page]', () => {
    const expected = items.slice(10, 20);

    expect(paginate(items, { page: 2 })).toEqual(expected);
  });

  it('should return the first page [15 per page]', () => {
    const expected = items.slice(0, 15);

    expect(paginate(items, { pageSize: 15 })).toEqual(expected);
  });

  it('should return the second page [17 per page]', () => {
    const expected = items.slice(17, 34);

    expect(paginate(items, { page: 2, pageSize: 17 })).toEqual(expected);
  });

  it('should return the sixth page [5 per page]', () => {
    const expected = items.slice(25, 30);

    expect(paginate(items, { page: 6, pageSize: 5 })).toEqual(expected);
  });

  it('should return the twentieth page [2 per page]', () => {
    const expected = items.slice(38, 40);

    expect(paginate(items, { page: 20, pageSize: 2 })).toEqual(expected);
  });
});

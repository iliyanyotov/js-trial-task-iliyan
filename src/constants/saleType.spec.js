import SALE_TYPE from './saleType';

describe('constants: SALE_TYPE', () => {
  it('should match the snapshot', () => {
    expect(SALE_TYPE).toMatchSnapshot();
  });
});

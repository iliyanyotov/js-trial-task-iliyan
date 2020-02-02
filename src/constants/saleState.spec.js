import SALE_STATE from './saleState';

describe('constants: SALE_STATE', () => {
  it('should match the snapshot', () => {
    expect(SALE_STATE).toMatchSnapshot();
  });
});

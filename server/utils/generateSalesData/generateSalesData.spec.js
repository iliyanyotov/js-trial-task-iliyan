import generateSalesData, {
  SALE_STATES,
  SALE_TYPES,
  SALE_AMOUNT_RANGE,
} from './generateSalesData';

describe('utils: generateSalesData', () => {
  it('should generate the data and follow the structure', () => {
    const count = 20;
    const startDate = new Date(2020, 1, 1);
    const endDate = new Date(2020, 1, 15);
    const data = generateSalesData(count, startDate, endDate);

    expect(data.length).toBe(count);

    data.forEach((item, index) => {
      expect(item.id).toBe(index);
      expect(item.date >= startDate).toBe(true);
      expect(item.date <= endDate).toBe(true);
      expect(SALE_STATES.includes(item.state)).toBe(true);
      expect(SALE_TYPES.includes(item.type)).toBe(true);
      expect(Number(item.amount)).toBeGreaterThanOrEqual(SALE_AMOUNT_RANGE.MIN);
      expect(Number(item.amount)).toBeLessThanOrEqual(SALE_AMOUNT_RANGE.MAX);
    });
  });
});

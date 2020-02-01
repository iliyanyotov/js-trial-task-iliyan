import SALE_STATE from '../../constants/saleState';
import SALE_TYPE from '../../constants/saleType';
import randomFromArray from '../randomFromArray/randomFromArray';
import getRandomFloat from '../getRandomFloat/getRandomFloat';
import getRandomDate from '../getRandomDate/getRandomDate';

export const SALE_STATES = Object.values(SALE_STATE);
export const SALE_TYPES = Object.values(SALE_TYPE);

export const SALE_AMOUNT_RANGE = {
  MIN: 2,
  MAX: 250,
};

const generateSalesData = (count, startDate, endDate) => {
  return Array.apply(null, Array(count))
    .map(() => {
      const date = getRandomDate(startDate, endDate);
      const state = randomFromArray(SALE_STATES);
      const type = randomFromArray(SALE_TYPES);
      const amount = getRandomFloat(
        SALE_AMOUNT_RANGE.MIN,
        SALE_AMOUNT_RANGE.MAX
      );

      const dateTimestamp = date.valueOf();

      return {
        date: dateTimestamp,
        state,
        type,
        amount,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((item, index) => ({ ...item, id: index }));
};

export default generateSalesData;

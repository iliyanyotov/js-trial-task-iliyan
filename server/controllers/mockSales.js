import generateSalesData from '../utils/generateSalesData/generateSalesData';
import addMonths from '../utils/addMonths/addMonths';

// Generating mock data with 100 items
const today = new Date();
const MOCK_SALES_COUNT = 100;
const MOCK_SALES_MONTHS_BACK = -6;
const MOCK_SALES_PERIOD = {
  START: addMonths(today, MOCK_SALES_MONTHS_BACK),
  END: today,
};

export default generateSalesData(
  MOCK_SALES_COUNT,
  MOCK_SALES_PERIOD.START,
  MOCK_SALES_PERIOD.END
);

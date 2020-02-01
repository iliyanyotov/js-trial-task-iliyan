import express from 'express';
import statusCodes from 'http-status-codes';

import paginate from '../utils/paginate/paginate';
import MOCK_SALES from './mockSales';

const router = express.Router();

router.get('/', (req, res) => {
  const { page, pageSize } = req.query;

  const data = paginate(MOCK_SALES, {
    page,
    pageSize,
  });

  res.status(statusCodes.OK).json({
    data,
    totalCount: data.length,
  });
});

export default router;

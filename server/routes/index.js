import express from 'express';
import statusCodes from 'http-status-codes';

import salesController from '../controllers/sales.controller';

const router = express.Router();

router.use('/sales', salesController);

// Health check
router.get('/health', (req, res) => {
  res.status(statusCodes.OK).json({
    message: 'Application is running!',
  });
});

// 404
router.use('*', (req, res) => {
  res.status(statusCodes.NOT_FOUND).json({
    message: `Missing API endpoint: ${req.originalUrl}`,
  });
});

export default router;

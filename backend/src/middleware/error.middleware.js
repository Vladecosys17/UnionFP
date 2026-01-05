import logger from '../config/logger.js';

export function errorHandler(err, req, res, next) {
  logger.error({
    method: req.method,
    url: req.originalUrl,
    stack: err.stack
  }, err.message);

  res.status(500).json({
    error: 'Internal Server Error'
  });
}

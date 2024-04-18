const productionLogger = require("./logger")

if (process.env.NODE_ENV !== 'production') {
  logger=productionLogger()
  logger.info('Running in production mode');
  }

  module.exports = logger
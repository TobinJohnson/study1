const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config()
const PORT= process.env.PORT || 8000
const NODE_ENV= process.env.NODE_ENV || 'production'
const loggerP = require('./logger/logger.js')


const Router = require('./routes/sampleRoute.js')
app.use('/',Router)
app.use('/uploads',express.static('uploads'))
let logger=null
if (process.env.NODE_ENV == 'production') {
    logger=loggerP
    logger.info('Running in production mode');
    }
  
logger.error('Running in development mode');
logger.warn('Running');

app.listen(PORT, function() {
    logger.info(`Server running on port ${PORT}`);
})
module.exports = logger

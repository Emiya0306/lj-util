const Logger = require('./components/Logger');
// const moment = require('./components/Moment');

exports.logger = config => new Logger(config);
const log4js = require('log4js');

const defaultConfig = {
	appenders: [{
		type: 'console'
	},{
		type: 'datefile',
		category: ['system', 'console'],
		filename: 'system',
		pattern: '.yyyy-MM-dd.log',
		maxLogSize: 1000000,
		alwaysIncludePattern: true
	}],
	replaceConsole: true
};

class Logger {
	constructor(config) {
		log4js.configure(defaultConfig);
	}
}

module.exports = Logger;
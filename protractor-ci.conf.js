const config = require('./protractor-ci.conf').config;
config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--no-sandbox']
    }
};
exports.config = config;
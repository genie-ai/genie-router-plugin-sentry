const Raven = require('raven');

async function start(config, app) {
    if (!config.dsn) {
        throw new Error('No Sentry DSN configured.');
    }
    Raven.config(config.dsn).install();
    app.use(Raven.requestHandler());
}

module.exports = { start };

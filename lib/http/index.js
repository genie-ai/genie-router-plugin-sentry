const Raven = require('raven')

function start (config, app, express) {
  return new Promise(function (resolve, reject) {
    if (!config.dsn) {
      reject(new Error('No DSN configured.'))
      return
    }
    Raven.config(config.dsn).install()
    app.use(Raven.requestHandler())
    resolve()
  })
}

module.exports = {start: start}

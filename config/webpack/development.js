process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const customConfig = require('./custom')
environment.config.merge(customConfig)

module.exports = environment.toWebpackConfig()
